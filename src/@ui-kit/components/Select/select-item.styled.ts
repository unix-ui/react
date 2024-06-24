import { createUseStyles } from "react-jss";
import { safeCssObj, safeCssObjOn } from "../../../utils/safeObj";
import { SxProps } from "../../types";
import { alpha } from "../../utils/alpha";

export const useSelectItemStyled = createUseStyles<
  "item",
  { active?: boolean; activeStyles?: SxProps; inActiveStyles?: SxProps }
>({
  item: (props) => ({
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    borderRadius: "0.375rem",
    fontSize: "13px",
    cursor: "pointer",
    ...safeCssObjOn(
      props.active,
      {
        color: "#ffffff",
        backgroundColor: "#4F46E5",
        ...safeCssObj(props.activeStyles),
      },
      {
        "&:hover": {
          backgroundColor: alpha("#4338CA", 0.1),
          ...safeCssObj(props.inActiveStyles),
        },
      }
    ),
  }),
});
