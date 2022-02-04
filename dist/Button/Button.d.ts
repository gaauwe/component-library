import { MouseEventHandler } from "react";
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
declare const Button: ({ size, primary, disabled, text, onClick, ...props }: ButtonProps) => JSX.Element;
export default Button;
export type { buttonThemeType, ThemeInterface };
