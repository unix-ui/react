import styled from "@emotion/styled";
import { safeCssObj, safeCssObjOn } from "../../../utils/safeObj";
import { alpha } from "../../utils/alpha";
import { unit } from "../../utils/units";
import { getColor } from "../../../utils/get";
import {
  T_WITH_NO_DEFAULT_STYLE,
  T_WITH_SCHEME,
  T_WITH_THEME,
} from "../../../@types/@types";
import { HtmlHTMLAttributes } from "react";
import { SxProps } from "../../types";
import { TransitionProps } from "../Transition/@types";

// export const useSelectStyled = createUseStyles<
//   "wrapper" | "transition",
//   Partial<SelectProps> & { reverse?: boolean }
// >({
//   wrapper: (props) => ({
//     width: "fit-content",
//     position: "relative",
//     ...safeCssObj(props.sx),
//   }),
//   transition: (props) => ({
//     display: "flex",
//     overflowY: "auto",

//     zIndex: 10,
//     flexDirection: "column",
//     width: "100%",
//     padding: "0.25rem",
//     gap: "0.125rem",
//     borderRadius: "0.375rem",
//     backgroundColor: "#ffffff",
//     ...safeCssObjOn(
//       props.reverse,
//       { bottom: "calc(100%+8px)" },
//       { top: "calc(100%+8px)" }
//     ),
//   }),
// });

type SelectProps = {
  activeStyles?: SxProps;
  inActiveStyles?: SxProps;
  transitionProps?: TransitionProps;
};

export const Select_ = styled.div<T_WITH_THEME<T_WITH_SCHEME<SelectProps>>>(
  {
    width: "fit-content",
    position: "relative",
  },
  (props) => safeCssObj(props.sx)
);

export const SelectItem_ = styled.button<T_WITH_THEME<T_WITH_SCHEME<{}>>>(
  ({ theme, ...props }) => ({
    borderRadius: unit.remSpacing(1),
    padding: unit.spacing(1, 4),
    fontSize: "13px",
    cursor: "pointer",
    transition: "all 150ms",
    "&:hover": {
      backgroundColor: alpha(getColor(theme, props.colorScheme)?.main, 0.1),
    },
    "&[data-active=true]": {
      color: "#ffffff",
      backgroundColor: getColor(theme, props.colorScheme)?.main,
      "&:hover": {
        color: "#ffffff",
        backgroundColor: getColor(theme, props.colorScheme)?.main,
      },
    },
  })
);
