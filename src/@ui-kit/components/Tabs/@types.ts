import { ComponentProps } from "react";
import { Tabs_ } from "./tab.styled";
import { T_WITH_NO_THEME } from "../../../@types/@types";

export type TabsProps = Omit<
  T_WITH_NO_THEME<ComponentProps<typeof Tabs_>>,
  "onChange"
> & {
  onChange?: (value: number) => void;
  value: number;
};
