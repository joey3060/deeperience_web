import React from 'react'
import { Field, reduxForm } from 'redux-form'
import FormNames from '../../../../constants/FormNames'
import FormButton from '../../../utils/FormButton'
import validate from '../createSiteValidate'
import Text from '../../../utils/Text'
import Editor from '../../../Editor'
import {
  BsForm as Form,
  BsFormFooter as FormFooter,
} from '../../../fields/widgets'

const CreateSiteFormPage2 = ({ handleSubmit, ...props }) => {
  const {
    pristine,
    submitting,
    invalid,
    previousPage,
  } = props

  return (
    <Form
      defaultHorizontal={true}
      defaultLabelDimensions={{ sm: 2 }}
      defaultFieldDimensions={{ sm: 6 }}
      onSubmit={handleSubmit}
    >
      <Field
        name="introduction"
        formName="TRIP_CREATE_SITE"
        component={Editor}
        path="/img/site"
        type="text"
      />

      <FormFooter
        labelDimensions={{ sm: 0 }}
        fieldDimensions={{ sm: 12 }}
        style={{ textAlign: 'center' }}
      >
        <FormButton type="button" onClick={previousPage}>
          <Text id={'trip.createSite.form.previousStep'}/>
        </FormButton>
        <FormButton type="submit" disabled={pristine || submitting || invalid}>
          <Text id={'trip.createSite.form.nextStep'}/>
        </FormButton>
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
    introduction: '<p><br></p>',
  },
})(CreateSiteFormPage2)
