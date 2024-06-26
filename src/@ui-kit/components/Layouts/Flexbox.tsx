import styled from "@emotion/styled";
import { safeCssObj } from "../../../utils/safeObj";
import { SxProps } from "../../types";

export const Center = styled.div<{
  direction?: SxProps["flexDirection"];
  gap?: number;
}>(
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  (props) => safeCssObj(props.sx),
  (props) => safeCssObj(props.direction && { flexDirection: props.direction }),
  (props) => ({ gap: props.gap })
);

export const SpaceBetween = styled.div<{
  direction?: SxProps["flexDirection"];
  gap?: number;
}>(
  {
    display: "flex",
    justifyContent: "space-between",
  },
  (props) => safeCssObj(props.sx),
  (props) => safeCssObj(props.direction && { flexDirection: props.direction }),
  (props) => ({ gap: props.gap })
);
