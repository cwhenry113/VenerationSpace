import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import Form from '../../components/venForm'

const newVen = () => {
  const venForm = {
    givenName: '',
    familyName: '',
  }

  return <Form formId="add-ven-form" venForm={venForm} />
}
export default newVen