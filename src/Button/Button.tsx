import React, { FC } from "react";
import { MouseEventHandler } from "react";
import { StyledButton } from "./Button.style";
import { buttonThemeType } from "./Button.theme";

export interface ButtonProps {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ size, primary, disabled, text, onClick, ...props }) => {
  return (
    <StyledButton type="button" onClick={onClick} primary={primary} disabled={disabled} size={size} {...props}>
      {text}
    </StyledButton>
  );
};

export default Button;
export type { buttonThemeType };
