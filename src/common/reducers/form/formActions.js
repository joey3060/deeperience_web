import formAPI from '../../api/form'
import { pushErrors } from '../error/errorActions'

export const validateForm = (formName, fieldName, value) => {
  return (dispatch, getState) => {
    return formAPI(getState().global.apiEngine)
      .form(formName)
      .field(fieldName, value)
      .validate()
      .catch((err) => {
        const validationError = {}
        dispatch(pushErrors(err))
        validationError[fieldName] = 'Unable to validate'
        throw validationError
      })
  }
}
