import React from 'react';
import styled from 'styled-components';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';

import Button from '../form/Button';
import { FormField } from '../../interfaces';
import { getFormFieldDetails, getErrorDetailsForField } from '../../utils/form-utils';
import Input from '../form/Input';

const formFields: Array<FormField> = [
  {
    name: 'title',
    type: 'text',
    initialValue: '',
    required: true,
    placeholder: 'Title',
  },
  {
    name: 'language',
    type: 'text',
    initialValue: '',
    required: true,
    placeholder: 'Language',
  },
  {
    name: 'description',
    type: 'text',
    initialValue: '',
    required: false,
    placeholder: 'Description',
  },
  {
    name: 'code',
    type: 'text',
    initialValue: '',
    required: true,
    placeholder: 'Code',
  },
];

const { shape, initialValues } = getFormFieldDetails(formFields);
type FormValues = Yup.InferType<typeof shape>;

const SubmitForm: React.FC = (): React.ReactElement => (
  <Formik
    initialValues={initialValues}
    onSubmit={async (values, { setSubmitting}) => {
      console.log(values);
      setSubmitting(false);
    }}
    validationSchema={shape}
  >
    {(props: FormikProps<FormValues>) => {
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
          {formFields.map((field: FormField) => (
            <InputWrapper>
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
          <Button disabled={isSubmitting} type="submit" onClick={handleSubmit}>Submit</Button>
        </form>
      )
    }}
  </Formik>
);

const InputWrapper = styled.div``;

export default SubmitForm;
