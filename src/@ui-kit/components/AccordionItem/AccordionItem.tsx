import styled from "@emotion/styled";
import { safeCssObj } from "../../../utils/safeObj";

const AccordionItem = styled.div((props) => {
  return safeCssObj(props.sx);
});

AccordionItem.defaultProps = {
  "data-unix-component": "accordion-item",
} as any;

export { AccordionItem };
