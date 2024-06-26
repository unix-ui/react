import { ButtonHTMLAttributes } from "react";
import { T_PRE_BUTTON_PROPS, T_WITH_NO_STYLE } from "../../../@types/@types";

export type IconButtonProps = T_WITH_NO_STYLE<
  ButtonHTMLAttributes<HTMLButtonElement>
> &
  T_PRE_BUTTON_PROPS & {
    size?: number;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  };
