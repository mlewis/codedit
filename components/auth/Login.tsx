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

const submitLogin = async (values: FormikValues) => {
  const response = await makePostRequest('login', {
    email: values.email,
    password: values.password,
  });
  if (response && response.token) {
    saveItem('token', response.token);
  }
}

const Login: React.FC = (): React.ReactElement => (
  <div>
    <H2>Login</H2>
    <AuthForm
      submitCallback={submitLogin}
      formFields={formFields}
    />
  </div>
);

export default Login;
