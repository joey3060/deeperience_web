import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import FormProperties from '../siteFormProperties'
import FormNames from '../../../../constants/FormNames'
import FormButton from '../../../utils/FormButton'
import Editor from '../../../utils/Editor'
import {
  BsForm as Form,
  BsFormFooter as FormFooter,
} from '../../../fields/widgets'
import styles from './styles.scss'

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
        formName={FormNames.TRIP_CREATE_SITE}
        component={Editor}
        type="text"
      />

      <FormFooter
        labelDimensions={{ sm: 0 }}
        fieldDimensions={{ sm: 12 }}
        className={styles.footer}
      >
        <FormButton
          type="button"
          onClick={previousPage}
          textId="common.previousStep"
        />
        <FormButton
          type="submit"
          disabled={pristine || submitting || invalid}
          textId="common.nextStep"
        />
      </FormFooter>
    </Form>
  )
}

export default reduxForm(FormProperties)(CreateSiteFormPage2)
