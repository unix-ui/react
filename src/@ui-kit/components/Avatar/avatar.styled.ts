import styled from "@emotion/styled";
import { safeCssObj } from "../../../utils/safeObj";

export const Avatar_ = styled.img((props) => {
  return {
    position: "relative",
    width: 60,
    height: 60,
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: "50%",
    marginRight: "-1em",
    boxShadow: "0 0 0 2px #fff",
    ...safeCssObj(props.sx),
  };
});
