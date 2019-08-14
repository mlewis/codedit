import React from 'react';
import styled from 'styled-components';

type Props = {
  /** The function that is called when the user clicks the button. */
  onClick: () => void,
  /** The contents of this button. */
  children: React.ReactNode,
  /** Whether or not this button is disabled */
  disabled?: boolean,
  /** Whether or not to display a button with alternate styling */
  alternate?: boolean,
  /** What type of button this is. Submit or Button for examples */
  type?: 'button' | 'submit' | 'reset',
  className?: string,
};

/**
 * A Button component with some default styling.
 *
 * Usage:
 *
 * ```js
 * <Button onClick={() => { console.log('click') }}>
 *     Click Me
 * </Button>
 *```
 */
const Button = ({ onClick, children, disabled = false, alternate = false, type = 'button', className = '' }: Props) => (
  <StyledButton
    onClick={onClick}
    alternate={alternate}
    disabled={disabled}
    className={className}
    type={type}
  >
    {children}
  </StyledButton>
);

Button.defaultProps = {
  disabled: false,
  alternate: false,
  type: 'button',
  className: '',
};

const StyledButton = styled.button<{ alternate?: boolean }>`
  background-color: ${props => props.alternate ? 'transparent' : props.theme.colors.secondary};
  color: ${props => props.alternate ? props.theme.colors.textColor : props.theme.colors.white};
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  border-radius: 3px;
  border: 0;
  padding: 15px;
  outline: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export default Button;
