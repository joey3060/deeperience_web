import Errors from '../../common/constants/Errors'
import Resources from '../../common/constants/Resources'
import todoAPI from '../../common/api/todo'
import wrapTimeout from '../decorators/wrapTimeout'
import { loginUser } from '../../common/reducers/user/userActions'
import { updateLocale } from '../../common/reducers/intl/intlActions'
import { setTodo } from '../../common/reducers/todo/todoActions'
import { setPage } from '../../common/reducers/page/pageActions'

export default {
  user: (req, res, next) => {
    const { cookies } = req.store.getState()
    req.store.dispatch(loginUser({
      token: cookies.token,
      data: cookies.user,
    }))
    next()
  },
  intl: wrapTimeout(3000)((req, res, next) => {
    const cookieLocale = req.store.getState().cookies.locale
    let lang
    if (cookieLocale) {
      lang = cookieLocale
    } else {
      lang = req.acceptsLanguages('en-us', 'zh-tw')
    }
    req.store
      .dispatch(updateLocale(lang))
      .then(() => {
        next()
      }, () => {
        res.pushError(Errors.STATE_PRE_FETCHING_FAIL, {
          detail: 'Cannot setup locale',
        })
        next()
      })
  }),
  todo: wrapTimeout(3000)((req, res, next) => {
    todoAPI(req.store.getState().global.apiEngine)
      .list({ page: req.query.page || 1 })
      .catch(() => {
        res.pushError(Errors.STATE_PRE_FETCHING_FAIL, {
          detail: 'Cannot list todos',
        })
        next()
      })
      .then((json) => {
        req.store.dispatch(setTodo(json.todos))
        req.store.dispatch(setPage(Resources.TODO, json.page))
        next()
      })
  }),
}
