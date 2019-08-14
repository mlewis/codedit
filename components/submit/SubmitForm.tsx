import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Input from '../form/Input';
import console = require('console');

const initialValues = {
  title: '',
  language: '',
  description: '',
  code: '',
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  landguage: Yup.string().required('Required'),
  description: Yup.string(),
  code: Yup.string().required('Required'),
});

const SubmitForm = () => (
  <Formik
    initialValues={initialValues}
    onSubmit={async (values, { setSubmitting}) => {
      console.log(values);
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
            {errors.title && touched.title &&
              <Error>{errors.title}</Error>
            }
            <Input
              name="title"
              type="text"
              value={values.title}
              onChange={handleChange}
              placeholder="Title"
            />
          </InputWrapper>
          <InputWrapper>
            {errors.language && touched.language &&
              <Error>{errors.language}</Error>
            }
            <Input
              name="language"
              type="text"
              value={values.language}
              onChange={handleChange}
              placeholder="Language"
            />
          </InputWrapper>
        </form>
      )
    }}
  </Formik>
);

const Error = styled.div`
    color: red;
`;

const InputWrapper = styled.div``;

export default SubmitForm;
