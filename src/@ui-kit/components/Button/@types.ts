import { ComponentProps } from "react";
import { Button_ } from "./button.styled";
import { T_WITH_NO_THEME, T_WITH_RIPPLE } from "../../../@types/@types";

export type ButtonProps = T_WITH_NO_THEME<
  T_WITH_RIPPLE<ComponentProps<typeof Button_>>
>;
