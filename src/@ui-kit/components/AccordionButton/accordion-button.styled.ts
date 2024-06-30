import styled from "@emotion/styled";
import { safeCssObj } from "../../../utils/safeObj";

export const AccordionButton_ = styled.button((props) => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ...safeCssObj(props.sx),
  };
});
