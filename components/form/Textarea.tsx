import React from 'react';
import styled from 'styled-components';

type Props = {
  /** The function that is called when the user edits the textarea. */
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  /** The current value of the textarea. */
  value: string,
  /** The input name that is also used as the id. */
  name: string,
};

/**
 * A Textarea component with some default styling.
 *
 * Usage:
 *
 * ```jsx
 * <Textarea
 *    onChange={() => { console.log('change'); }}
 *    value={value}
 *    name="email"
 * />
 *```
 */
const Textarea: React.FC<Props> = ({
  onChange,
  value,
  name
}: Props): React.ReactElement => (
  <StyledTextarea
    onChange={onChange}
    value={value}
    name={name}
    id={name}
  />
);

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 80px;
  border-radius: 3px;
  border: 1px solid transparent;
  border-top: none;
  border-bottom: 1px solid #DDD;
  box-shadow: inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px #FFF, 0 1px 0 #FFF;
  outline: 0;
  padding: 8px 6px;
`;

export default Textarea;
