import { FC } from "react";
import { ChangeEventHandler } from "react";
import { inputThemeType } from "./Input.theme";
export interface InputProps {
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
export default Input;
export type { inputThemeType };
