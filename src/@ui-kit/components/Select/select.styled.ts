import { createUseStyles } from "react-jss";
import { safeCssObj, safeCssObjOn } from "../../../utils/safeObj";
import { SelectProps } from "./@types";

export const useSelectStyled = createUseStyles<
  "wrapper" | "transition",
  Partial<SelectProps> & { reverse?: boolean }
>({
  wrapper: (props) => ({
    width: "fit-content",
    position: "relative",
    ...safeCssObj(props.sx),
  }),
  transition: (props) => ({
    display: "flex",
    overflowY: "auto",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
    flexDirection: "column",
    width: "100%",
    padding: "0.25rem",
    gap: "0.125rem",
    borderRadius: "0.375rem",
    backgroundColor: "#ffffff",
    ...safeCssObjOn(
      props.reverse,
      { bottom: "calc(100%+8px)" },
      { top: "calc(100%+8px)" }
    ),
  }),
});
