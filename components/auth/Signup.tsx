import React, { useState, ReactElement } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';

import Button from '../form/Button';
import { FormField } from '../../interfaces';
import { getFormFieldDetails, getErrorDetailsForField } from '../../utils/form-utils';
import { H2 } from '../common/Headers';
import Input from '../form/Input';
import { makePostRequest } from '../../utils/API';
import { saveItem } from '../../utils/storage';
import TransparentButton from '../common/TransparentButton';

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

const { shape, initialValues } = getFormFieldDetails(formFields);
type FormValues = Yup.InferType<typeof shape>;

const Signup: React.FC = (): ReactElement => {
  const router = useRouter();
  const [loginSuccess, setLoginSuccess] = useState(false);

  return (
    <div>
      <H2>Sign Up</H2>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting}): Promise<void> => {
          const response = await makePostRequest('register', {
            email: values.email,
            password: values.password,
          });
          if (response && response.token) {
            saveItem('token', response.token);
            setLoginSuccess(true);
          }
          setSubmitting(false);
        }}
        validationSchema={shape}
      >
        {(props: FormikProps<FormValues>): React.ReactElement => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleSubmit
          } = props;
          return (
            <FormWrapper>
              {loginSuccess ?
                <div>
                  You are now logged in.
                  <p>
                    <TransparentButton type="button" onClick={(): void => { router.back(); }}>Go back</TransparentButton>
                  </p>
                </div>
              :
              <form onSubmit={handleSubmit}>
                {formFields.map((field: FormField) => (
                  <InputWrapper key={`form-field-${field.name}`}>
                    {getErrorDetailsForField(field.name, errors, touched)}
                    <Input
                      name={field.name}
                      type={field.type}
                      value={values[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                    />
                  </InputWrapper>
                ))}
                <Button disabled={isSubmitting} onClick={() => { handleSubmit(); }} type="submit">Sign Up</Button>
              </form>
            }
            </FormWrapper>
          )
        }}
      </Formik>
    </div>
  )
}

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const FormWrapper = styled.div`
  margin-top: 20px;
`;

export default Signup;
