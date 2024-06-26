import { safeCssObjOn } from "../../../utils/safeObj";
import styled from "@emotion/styled";
import { T_WITH_SCHEME, T_WITH_THEME } from "../../../@types/@types";

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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0.375rem",
  cursor: "pointer",
  userSelect: "none",
  color: "12px",
  width: "24px",
  height: "24px",
  ":hover": { backgroundColor: "#9CA3AF" },
});
