import styled from "@emotion/styled";
import { unit } from "../../utils";
import { safeCssObj } from "../../../utils/safeObj";

export const Kbd = styled.span((props) => ({
  borderWidth: "1px 1px 3px",
  padding: unit.spacing(0.4, 2.4),
  borderColor: "#e2e8f0",
  borderStyle: "solid",
  borderRadius: unit.spacing(2),
  backgroundColor: "#edf2f7",
  color: "#000",
  fontSize: 12,
  fontWeight: 600,
  display: "inline-block",
  ...safeCssObj(props.sx),
}));
