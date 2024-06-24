import { safeCssObj } from "../../../utils/safeObj";
import styled from "@emotion/styled";

export const TransitionWrapper_ = styled.div({}, (props) => ({
  ...safeCssObj(props.sx),
}));
