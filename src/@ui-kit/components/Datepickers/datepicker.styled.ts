import { safeCssObjOn } from "../../../utils/safeObj";
import styled from "@emotion/styled";
import { T_WITH_SCHEME, T_WITH_THEME } from "../../../@types/@types";
import { Moment } from "moment";
import { SxProps } from "../../types";

// export const useDatepickerStyled = createUseStyles(() => ({
//   button_wrapper: {},
//   ripple_button: () => ({
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: "0.375rem",
//     cursor: "pointer",
//     userSelect: "none",
//     color: "12px",
//     width: "24px",
//     height: "24px",
//     ":hover": { backgroundColor: "#9CA3AF" },
//   }),
//   calendar: {
//     display: "grid",
//     gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
//     gap: "0.25rem",
//     justifyItems: "center",
//     alignContent: "center",
//     width: "fit-content",
//   },
// }));

// export const useDateButtonStyled = createUseStyles<
//   "ripple_button",
//   { isCurrentMonth?: boolean }
// >({
//   ripple_button: (props) => ({

//   }),
// });

export const DatePicker_ = styled.div<T_WITH_THEME<T_WITH_SCHEME<{}>>>({
  width: "fit-content",
});

export const DatePickerButtons_ = styled.div({
  display: "flex",
  marginBottom: "0.5rem",
  gap: "0.25rem",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Calendar_ = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
  gap: "0.25rem",
  justifyItems: "center",
  alignContent: "center",
  width: "fit-content",
});
export const CalendarDays_ = styled.p({
  fontSize: "14px",
});

export const _navButtonSx: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0.375rem",
  cursor: "pointer",
  userSelect: "none",
  color: "12px",
  width: "24px",
  height: "24px",
  ":hover": { backgroundColor: "#ebebeb" },
};
export const _inputDaysSx: SxProps = {
  paddingTop: "0.125rem",
  paddingBottom: "0.125rem",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
  borderRadius: "0.25rem",
  fontSize: "13px",
  ":hover": { backgroundColor: "#ebebeb" },
};

export const _dateButtonSx: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0.375rem",
  cursor: "pointer",
  userSelect: "none",
  color: "12px",
  width: "26px",
  height: "26px",
};
