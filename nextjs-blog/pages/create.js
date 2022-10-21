import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Form from '../components/venForm'

const newVen = () => {
  const venForm = {
    givenName: '',
    familyName: '',
  }

  return <Form formId="add-ven-form" venForm={venForm} />
}
export default newVen