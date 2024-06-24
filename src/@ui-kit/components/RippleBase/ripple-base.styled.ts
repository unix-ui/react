import { createUseStyles } from "react-jss";
import { safeCssObj } from "../../../utils/safeObj";
import { RippleBaseProps } from "./@types";

export const useRippleBaseStyled = createUseStyles<"ripple", RippleBaseProps>({
  ripple: (p) => ({
    overflow: "hidden",
    position: "relative",
    ...safeCssObj(p.sx),
  }),
});
