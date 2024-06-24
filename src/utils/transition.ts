import { TransitionProps } from "../@ui-kit/components/Transition/@types";
import { safeCssObj } from "./safeObj";

export const get_transition_props = (
  props: TransitionProps,
  t?: TransitionProps
) => ({
  enteringStyle: {
    ...safeCssObj(props?.enteringStyle),
    ...safeCssObj(t?.enteringStyle),
  },
  activeStyle: {
    ...safeCssObj(props?.activeStyle),
    ...safeCssObj(t?.activeStyle),
  },
  exitingStyle: {
    ...safeCssObj(props?.exitingStyle),
    ...safeCssObj(t?.exitingStyle),
  },
});
