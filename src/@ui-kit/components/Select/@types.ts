import { HtmlHTMLAttributes } from "react";
import { SxProps } from "../../types";
import { TransitionProps } from "../Transition/@types";
import { T_DEFINED_STYLED } from "../../../@types/@types";

export type SelectProps<T = unknown, K = unknown> = T_DEFINED_STYLED<
  Omit<HtmlHTMLAttributes<HTMLDivElement>, "onChange" | "value">
> & {
  inputRenderer: React.ReactNode;
  options: T;
  value?: K;
  onChange?: (value: K, index: number) => void;
  itemRenderer?: (e: K) => React.ReactElement;
  activeOn?: (e: K) => boolean;
  itemToShow?: (e: K) => any;
  activeStyles?: SxProps;
  inActiveStyles?: SxProps;
  transitionProps?: TransitionProps;
};
