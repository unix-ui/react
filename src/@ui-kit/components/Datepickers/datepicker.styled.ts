import { createUseStyles } from "react-jss";
import { safeCssObjOn } from "../../../utils/safeObj";

export const useDatepickerStyled = createUseStyles(() => ({
  wrapper: {
    width: "fit-content",
  },
  button_wrapper: {
    display: "flex",
    marginBottom: "0.5rem",
    gap: "0.25rem",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ripple_button: () => ({
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
  }),
  calendar: {
    display: "grid",
    gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
    gap: "0.25rem",
    justifyItems: "center",
    alignContent: "center",
    width: "fit-content",
  },
}));
export const useDateButtonStyled = createUseStyles<
  "ripple_button",
  { isCurrentMonth?: boolean }
>({
  ripple_button: (props) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.375rem",
    cursor: "pointer",
    userSelect: "none",
    color: "12px",
    width: "24px",
    height: "24px",
    ...safeCssObjOn(
      props.isCurrentMonth,
      {
        color: "#374151",
      },
      { color: "#4B5563" }
    ),
  }),
});
