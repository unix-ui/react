import { ButtonHTMLAttributes } from "react";
import {
  T_DEFAULT_BUTTON_PROPS,
  T_DEFINED_STYLED,
} from "../../../@types/@types";

export type IconButtonProps = T_DEFINED_STYLED<
  ButtonHTMLAttributes<HTMLButtonElement>
> &
  T_DEFAULT_BUTTON_PROPS & {
    size?: number;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  };
