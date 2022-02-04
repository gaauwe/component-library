import { MouseEventHandler, ChangeEventHandler, FC } from 'react';

declare type buttonThemeType = {
    theme: string;
};

interface ThemeInterface {
    name: "ComponentTheme";
}
interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    themeName?: ThemeInterface["name"];
}
declare const Button: ({ size, primary, disabled, text, onClick, ...props }: ButtonProps) => JSX.Element;

declare type inputThemeType = {
    theme: string;
};

interface InputProps {
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    success?: boolean;
    disabled?: boolean;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const Input: FC<InputProps>;

export { Button, ButtonProps, Input, InputProps, ThemeInterface, buttonThemeType, inputThemeType };
