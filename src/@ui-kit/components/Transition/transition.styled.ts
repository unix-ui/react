import { keyframes } from "@emotion/react";
import { safeCssObj, safeCssObjOn } from "../../../utils/safeObj";
import styled from "@emotion/styled";
import { SxProps } from "../../types";
import { T_WITH_SCHEME } from "../../../@types/@types";

type T_ANIMATION = SxProps & { duration?: number; animationType?: string };

type TransitionProps = T_WITH_SCHEME<{
  enteringStyle?: T_ANIMATION;
  activeStyle?: SxProps;
  exitingStyle?: T_ANIMATION;
  show?: boolean;
}>;
const keyf = (props?: { from: any; to: any }) =>
  keyframes({ from: props?.from, to: props?.to });

export const Transition_ = styled.div<TransitionProps>((props) => ({
  ...safeCssObj(props.sx),
  transition: `all ${props.exitingStyle?.duration || 150}ms ${
    props.exitingStyle?.animationType || ""
  }`,

  ...safeCssObjOn(
    props.show,
    {
      animation: `${keyf({
        from: {
          ...safeCssObj(props.enteringStyle),
          duration: "" as any,
          animationType: "",
        },
        to: {
          ...safeCssObj(props.activeStyle),
          duration: "" as any,
          animationType: "",
        },
      })} ${props.enteringStyle?.duration || 150}ms forwards ${
        props.enteringStyle?.animationType || ""
      }`,
    },
    {
      animation: `${keyf({
        from: {
          ...safeCssObj(props.activeStyle),
          duration: "" as any,
          animationType: "",
        },
        to: {
          ...safeCssObj(props.exitingStyle),
          duration: "" as any,
          animationType: "",
        },
      })} ${props.exitingStyle?.duration || 150}ms forwards ${
        props.exitingStyle?.animationType || ""
      }`,
    }
  ),
}));
