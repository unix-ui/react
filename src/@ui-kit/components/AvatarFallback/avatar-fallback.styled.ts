import styled from "@emotion/styled";
import { colors } from "../../colors";
import { safeCssObj } from "../../../utils/safeObj";

export const AvatarFallback = styled.span((props) => ({
  position: "relative",
  borderRadius: "50%",
  fontWeight: 600,
  background: colors.gray?.[200],
  color: colors.slate?.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ...safeCssObj(props.sx),
}));
