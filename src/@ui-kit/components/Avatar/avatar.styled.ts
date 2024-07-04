import styled from "@emotion/styled";
import { safeCssObj } from "../../../utils/safeObj";

export const Avatar_ = styled.img((props) => {
  return {
    ...safeCssObj(props.sx),
  };
});
