import { ComponentProps } from "react";
import { Transition_ } from "./transition.styled";
import { T_WITH_NO_THEME } from "../../../@types/@types";

export type TransitionProps = T_WITH_NO_THEME<
  ComponentProps<typeof Transition_>
>;
