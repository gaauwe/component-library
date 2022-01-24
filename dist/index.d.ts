import { MouseEventHandler, FC } from 'react';

declare type buttonThemeType = {
    theme: string;
};

interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const Button: FC<ButtonProps>;

export { Button, ButtonProps, buttonThemeType };
