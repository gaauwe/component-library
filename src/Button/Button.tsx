import React, { FC } from "react";
import { MouseEventHandler } from "react";
import { StyledButton } from "./Button.style";
import { buttonThemeType } from "./Button.theme";

interface ThemeInterface {
  name: "ComponentTheme";
}

export interface ButtonProps {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  themeName?: ThemeInterface["name"];
}

const Button = ({ size, primary, disabled, text, onClick, ...props }: ButtonProps): JSX.Element => {
  return (
    <StyledButton type="button" onClick={onClick} primary={primary} disabled={disabled} size={size} {...props}>
      {text}
    </StyledButton>
  );
};

export default Button;
export type { buttonThemeType, ThemeInterface };
