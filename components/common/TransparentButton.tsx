import React from 'react';
import styled from 'styled-components';

type Props = {
  /** The function that is called when the user clicks the button. */
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  /** The contents of this button. */
  children: React.ReactNode,
  /** The type of button. */
  type: 'button' | 'submit' | 'reset',
  /** Optional className passed automatically by styled-components */
  className?: string,
};

/**
 * A button that has no styling. Used when you want a link but can't.
 *
 * Usage:
 *
 * ```js
 * <TransparentButton onClick={() => { console.log('click') }}>
 *     Click Me
 * </TransparentButton>
 *```
 */
const TransparentButton: React.FC<Props> = ({
  onClick,
  children,
  type='button',
  className = ''
}): React.ReactElement => (
  <StyledButton
    onClick={onClick}
    type={type}
    className={className}
  >
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  background-color: transparent;
  outline: 0;
  border: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export default TransparentButton;
