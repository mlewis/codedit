import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Formik, FormikProps, FormikValues } from 'formik';
import * as Yup from 'yup';

import Button from '../form/Button';
import { FormField } from '../../interfaces';
import { getFormFieldDetails, getErrorDetailsForField } from '../../utils/form-utils';
import Input from '../form/Input';
import TransparentButton from '../common/TransparentButton';

type Props = {
  submitCallback: (values: FormikValues) => void,
  formFields: Array<FormField>,
};

const AuthForm: React.FC<Props> = ({ submitCallback, formFields }): React.ReactElement => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const { shape, initialValues } = getFormFieldDetails(formFields);
  type FormValues = Yup.InferType<typeof shape>;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting}): Promise<void> => {
        await submitCallback(values);
        setSubmitting(false);
        setSuccess(true);
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
            {success ?
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
              <Button disabled={isSubmitting} onClick={() => { handleSubmit(); }} type="submit">Login</Button>
            </form>
          }
          </FormWrapper>
        )
      }}
    </Formik>
  );
}

const InputWrapper = styled.div`
  margin-bottom: 20px; 
`;

const FormWrapper = styled.div`
  margin-top: 20px;
`;

export default AuthForm;
