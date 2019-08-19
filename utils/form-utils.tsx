import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { FormikErrors, FormikTouched } from 'formik';

import { FormField, KeyValue } from '../interfaces';

type FormFieldDetailValues = {
  shape: Yup.Schema<any>,
  initialValues: KeyValue,
};

const getYupType = (type: string, required: boolean): Yup.Schema<any> => {
  const yupType = Yup.string();
  if (required) {
    yupType.required();
  }
  if (type === 'email') {
    yupType.email();
  }
  return yupType;
}

const getFormFieldDetails = (fields: Array<FormField>): FormFieldDetailValues => {
  const shape = Yup.object().shape({});
  const initialValues = {};
  fields.forEach((field: FormField) => {
    shape.shape({
      [field.name]: getYupType(field.type, field.required),
    });
    initialValues[field.name] = field.initialValue;
  });
  return { shape, initialValues };
};

const getErrorDetailsForField = (fieldName: string, errors: FormikErrors<KeyValue>, touched: FormikTouched<KeyValue>): React.ReactElement => {
  if (errors[fieldName] && touched[fieldName]) {
    return (<Error>{errors[fieldName]}</Error>);
  }

  return null;
}

const Error = styled.div`
  color: red;
`;

export { getErrorDetailsForField, getFormFieldDetails };