import React from 'react';
import { FormikValues } from 'formik';

import AuthForm from './AuthForm';
import { FormField } from '../../interfaces';
import { H2 } from '../common/Headers';
import { makePostRequest } from '../../utils/API';
import { saveItem } from '../../utils/storage';

const formFields: Array<FormField> = [
  {
    name: 'email',
    type: 'email',
    initialValue: '',
    required: true,
    placeholder: 'Email Address',
  },
  {
    name: 'password',
    type: 'password',
    initialValue: '',
    required: true,
    placeholder: 'Password',
  },
];

const submitSignup = async (values: FormikValues) => {
  const response = await makePostRequest('register', {
    email: values.email,
    password: values.password,
  });
  if (response && response.token) {
    saveItem('token', response.token);
  }
}

const Signup: React.FC = (): React.ReactElement => (
  <div>
    <H2>Sign Up</H2>
    <AuthForm
      submitCallback={submitSignup}
      formFields={formFields}
    />
  </div>
);

export default Signup;
