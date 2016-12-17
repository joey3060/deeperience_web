import { Map } from 'immutable'
import FormNames from '../../../constants/FormNames'
import validate from './createSiteValidate'

export default {
  form: FormNames.TRIP_CREATE_SITE,
  destroyOnUnmount: false,     // <------ preserve form data
  validate,
  initialValues: Map({
    name: '',
    tags: [],
    introduction: '<p><br></p>',
  }),
}
