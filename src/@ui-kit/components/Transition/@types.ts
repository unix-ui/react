import { HTMLAttributes } from "react";
import { SxProps } from "../../types";

type T_ANIMATION = SxProps & { duration?: number; transitionType?: string };

export type TransitionProps = HTMLAttributes<HTMLDivElement> & {
  enteringStyle?: T_ANIMATION;
  activeStyle?: T_ANIMATION;
  exitingStyle?: T_ANIMATION;
  show?: boolean;
  sx?: SxProps;
};
