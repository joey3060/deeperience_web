import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import Resources from '../../../constants/Resources'
import todoAPI from '../../../api/todo'
import { pushErrors } from '../../../reducers/error/errorActions'
import {
  setTodo,
  addTodo,
  removeTodo,
} from '../../../reducers/todo/todoActions'
import { setCrrentPage, setPage } from '../../../reducers/page/pageActions'
import PageLayout from '../../layouts/PageLayout'
import Pagination from '../../utils/BsPagination'

class TodoItem extends Component {
  constructor() {
    super()
    this.state = {
      isEditable: false,
      inputValue: '',
    }
  }

  renderInput() {
    const { inputValue } = this.state

    return (
      <input
        type="text"
        value={inputValue}
        onChange={(e) => this.setState({
          inputValue: e.target.value,
        })}
      />
    )
  }

  renderControlButtons() {
    const { text, onSaveClick } = this.props
    const { isEditable, inputValue } = this.state

    return isEditable ? (
      <span>
        <button
          onClick={() => (
            onSaveClick(inputValue)
              .then(() => this.setState({ isEditable: false }))
          )}
        >
          Save
        </button>
        <button onClick={() => this.setState({ isEditable: false })}>
          Cancel
        </button>
      </span>
    ) : (
      <span>
        <button
          onClick={() => this.setState({ isEditable: true, inputValue: text })}
        >
          Edit
        </button>
      </span>
    )
  }

  render() {
    const { onRemoveClick, text } = this.props
    const { isEditable } = this.state

    return (
      <li>
        {text}
        {isEditable && this.renderInput()}
        {this.renderControlButtons()}
        <button onClick={onRemoveClick}>x</button>
      </li>
    )
  }
}

class ListPage extends Component {
  constructor(props) {
    super(props)
    this.handleAddClick = this._handleAddClick.bind(this)
  }

  componentDidMount() {
    const { dispatch, location } = this.props
    dispatch(setCrrentPage(Resources.TODO, location.query.page || 1))
  }

  componentDidUpdate(prevProps) {
    const { dispatch, apiEngine, page, location } = this.props

    if (prevProps.page.current !== page.current) {
      todoAPI(apiEngine)
        .list({ page: page.current })
        .catch((err) => {
          dispatch(pushErrors(err))
          throw err
        })
        .then((json) => {
          dispatch(setTodo(json.todos))
          dispatch(setPage(Resources.TODO, json.page))
          dispatch(push({
            pathname: location.pathname,
            query: { page: json.page.current },
          }))
        })
    }
  }

  _handleAddClick() {
    const { dispatch, apiEngine } = this.props
    const text = this.todotext.value
    todoAPI(apiEngine)
      .create({ text })
      .catch((err) => {
        dispatch(pushErrors(err))
        throw err
      })
      .then((json) => {
        dispatch(addTodo(json.todo))
        this.todotext.value = ''
      })
  }

  handleSaveClick(id, newText) {
    const { dispatch, apiEngine } = this.props

    return todoAPI(apiEngine)
      .update(id, { text: newText })
      .catch((err) => {
        dispatch(pushErrors(err))
        throw err
      })
      .then((json) => {
        this.fetchTodos()
      })
  }

  handleRemoveClick(id) {
    const { dispatch, apiEngine } = this.props
    todoAPI(apiEngine)
      .remove(id)
      .catch((err) => {
        dispatch(pushErrors(err))
        throw err
      })
      .then((json) => {
        dispatch(removeTodo(id))
      })
  }

  render() {
    const { page } = this.props

    return (
      <PageLayout>
        <PageHeader>Todo List ({`${page.current} / ${page.total}`})</PageHeader>
        <input type="text" ref={todotext => { this.todotext = todotext }} />
        <button onClick={this.handleAddClick}>Add Todo</button>
        <ul>
          {this.props.todos.map((todo) =>
            <TodoItem
              key={todo._id}
              onRemoveClick={this.handleRemoveClick.bind(this, todo._id)}
              onSaveClick={this.handleSaveClick.bind(this, todo._id)}
              text={todo.text} />)}
        </ul>
        <Pagination resourceName={Resources.TODO} />
      </PageLayout>
    )
  }
};

export default connect(state => ({
  apiEngine: state.global.apiEngine,
  todos: state.todos,
  page: state.pages[Resources.TODO] || {},
}))(ListPage)
