import { T_WITH_RIPPLE } from "../../../@types/@types";
import { safeCssObj } from "../../../utils/safeObj";
import styled from "@emotion/styled";

export const RippleBase_ = styled.button<T_WITH_RIPPLE<{}>>(
  {
    overflow: "hidden",
    position: "relative",
  },
  (p) => safeCssObj(p.sx)
);
