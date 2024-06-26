import { ComponentProps } from "react";
import { Select_ } from "./select.styled";
import { T_WITH_NO_THEME } from "../../../@types/@types";

export type SelectProps<T = unknown, K = unknown> = T_WITH_NO_THEME<
  Omit<ComponentProps<typeof Select_>, "onChange" | "value"> & {
    value?: K;
    onChange?: (value: K, index: number) => void;
    inputRenderer: React.ReactNode;
    options: T;
    itemRenderer?: (e: K) => React.ReactElement;
    activeOn?: (e: K) => boolean;
    itemToShow?: (e: K) => any;
    disableHideOnChange?: boolean;
  }
>;
