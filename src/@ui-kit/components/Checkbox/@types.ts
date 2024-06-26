import { ComponentProps } from "react";
import { CheckboxButton_ } from "./checkbox.styled";
import { T_WITH_NO_THEME } from "../../../@types/@types";

export type CheckboxProps = T_WITH_NO_THEME<
  Omit<ComponentProps<typeof CheckboxButton_>, "onChange"> & {
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
  }
>;
