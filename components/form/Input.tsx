import React from 'react';
import styled from 'styled-components';

type Props = {
  /** The function that is called when the user edits the input. */
  onChange: (e: React.FormEvent<HTMLInputElement>) => void,
  /** The current value of the input. */
  value: string,
  /** The input name that is also used as the id. */
  name: string,
  /** The type of input (text, email, etc.) */
  type?: string,
  /** The optional placeholder text */
  placeholder?: string,
  className?: string,
};

/**
 * An input component with some default styling.
 *
 * Usage:
 *
 * ```jsx
 * <Input
 *    onChange={() => { console.log('change'); }}
 *    value={value}
 *    name="email"
 *    type="email"
 * />
 *```
 */
const Input = ({ onChange, value, name, placeholder = '', type = 'text', className = '' }: Props) => (
  <StyledInput
    onChange={onChange}
    value={value}
    type={type}
    name={name}
    id={name}
    placeholder={placeholder}
    className={className}
  />
);

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
};

const StyledInput = styled.input`
  width: 100%;
  border-radius: 3px;
  border: 1px solid transparent;
  border-top: none;
  border-bottom: 1px solid #DDD;
  box-shadow: inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px #FFF, 0 1px 0 #FFF;
  outline: 0;
  padding: 8px 6px;
`;

export default Input;
