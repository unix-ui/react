import styled from "@emotion/styled";
import { safeCssObj } from "../../../utils/safeObj";

export const AvatarGroup_ = styled.div((props) => {
  return {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    ...safeCssObj(props.sx),
  };
});

export const RestAvatars_ = styled.span((props) => {
  return {
    position: "relative",
    ...safeCssObj(props.sx),
  };
});
