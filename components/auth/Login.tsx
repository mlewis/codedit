import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from '../form/Button';
import { H2 } from '../common/Headers';
import Input from '../form/Input';
import { makePostRequest } from '../../utils/API';
import { saveItem } from '../../utils/storage';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  const router = useRouter();

  return (
    <div>
      <H2>Login</H2>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting}) => {
          const response = await makePostRequest('login', {
            email: values.email,
            password: values.password,
          });
          saveItem('token', response.token);
          setSubmitting(false);
        }}
        validationSchema={validationSchema}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleSubmit
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <InputWrapper>
                {errors.email && touched.email &&
                  <Error>{errors.email}</Error>
                }
                <Input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                />
              </InputWrapper>
              <InputWrapper>
                {errors.password && touched.password &&
                  <Error>{errors.password}</Error>
                }
                <Input
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </InputWrapper>
              <Button onClick={handleSubmit} type="submit">Login</Button>
            </form>
          )
        }}
      </Formik>
    </div>
  )
}

const InputWrapper = styled.div``;

const Error = styled.div`
  color: red;
`;

export default Login;
