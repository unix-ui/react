import styled from "@emotion/styled";
import { safeCssObj } from "../../../utils/safeObj";
import { unit } from "../../utils";

export const KbdChain_ = styled.p<{ spacing?: number | string }>((props) => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: props.spacing || unit.spacing(1),
    width: "fit-content",

    ...safeCssObj(props.sx),
  };
});
