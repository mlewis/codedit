export type KeyValue = {
  [key: string]: string
};

export type FormField = {
  name: string,
  type: 'text' | 'email' | 'password' | 'tel',
  initialValue: string,
  required: boolean,
  placeholder: string,
};
