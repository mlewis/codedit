import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from '../form/Button';
import Input from '../form/Input';

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

const SubmitForm: React.FC = (): React.ReactElement => (
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
          <Button disabled={isSubmitting} type="submit" onClick={handleSubmit}>Submit</Button>
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
