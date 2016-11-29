import React from 'react'
import { Link } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import FormNames from '../../../constants/FormNames'
import FormButton from '../../utils/FormButton'
import validate from './createSiteValidate'
import Text from '../../widgets/Text'
import Textarea from '../../fields/adapters/BsTextarea'
import styles from '../../../styles'
import {
  BsInput as Input,
  BsSelect as Select,
  BsCheckboxList as CheckboxList,
} from '../../fields/adapters'
import {
  BsForm as Form,
  BsFormFooter as FormFooter,
  BsField as FormField,
} from '../../fields/widgets'

const CreateSiteFormPage5 = ({ handleSubmit, ...props }) => {
  const {
    pristine,
    invalid,
  } = props

  return (
    <Form
      defaultHorizontal={true}
      defaultLabelDimensions={{ sm: 2 }}
      defaultFieldDimensions={{ sm: 6 }}
      onSubmit={handleSubmit}
    >

      <div style={{textAlign: 'center'}}>
        <img src="/img/icon_finish.png" width="200px" /> 
        <div style={{marginBottom: '50px'}}>
          <Text id="trip.createSite.form.congratulation" 
            style={{fontSize: styles.font.big}}
          />
        </div>
      </div>

      <FormFooter
        labelDimensions={{ sm: 0 }}
        fieldDimensions={{ sm: 12 }}
        style={{ textAlign: 'center' }}
      >
        <Link to="/trip/manageSite">
          <FormButton type="submit" disabled={pristine || invalid}>
            <Text id={'nav.trip.manageSite'}>
            </Text>
          </FormButton>
        </Link>
      </FormFooter>
    </Form>
  )
}

export default reduxForm({
  form: FormNames.TRIP_CREATE_SITE,
  destroyOnUnmount: false,     // <------ preserve form data
  validate,
  initialValues: {
    name: '',
    tags: [],
  },
})(CreateSiteFormPage5)
