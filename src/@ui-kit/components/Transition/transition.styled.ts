import { keyframes } from "@emotion/react";
import { safeCssObj, safeCssObjOn } from "../../../utils/safeObj";
import styled from "@emotion/styled";
import { SxProps } from "../../types";
import { T_WITH_SCHEME } from "../../../@types/@types";

type T_ANIMATION = SxProps & { duration?: number };

type TransitionProps = T_WITH_SCHEME<{
  enteringStyle?: T_ANIMATION;
  activeStyle?: SxProps;
  exitingStyle?: T_ANIMATION;
  show?: boolean;
}>;
const keyf = (props?: TransitionProps) =>
  keyframes({ from: props?.enteringStyle, to: props?.activeStyle });

export const Transition_ = styled.div<TransitionProps>((props) => ({
  ...safeCssObj(props.sx),
  ...safeCssObjOn(
    props.show,
    {
      animation: `${keyf({
        enteringStyle: props.enteringStyle,
        activeStyle: props.activeStyle,
      })} ${props.enteringStyle?.duration || 150}ms linear`,
    },
    {
      ...safeCssObj(props.exitingStyle),
      transition: `all ${props.exitingStyle?.duration || 150}ms linear`,
    }
  ),
}));
