import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
} from "react";

export type CheckboxProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onChange"
> & {
  size?: number;
  labelProps?: Omit<HTMLAttributes<HTMLSpanElement>, "children">;
  inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, "children">;
  checkBoxProps?: HTMLAttributes<HTMLSpanElement>;
  label?: string;
  iconSize?: number;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
