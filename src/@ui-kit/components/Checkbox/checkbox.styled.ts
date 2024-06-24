import { safeCssObj, safeCssObjOn } from "../../../utils/safeObj";
import styled from "@emotion/styled";

export const CheckboxButton_ = styled.button(
  {
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 4,
  },
  (props) =>
    safeCssObj(props.disabled && { pointerEvents: "none", opacity: 0.5 })
);

export const CheckboxSpan_ = styled.span<{ checked: boolean }>(
  {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    transitionProperty:
      "color, background-color, border-color, text-decoration-color, fill, stroke",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    borderRadius: "0.25rem",
    transitionDuration: "75ms",
    "&>svg": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%)",
    },
  },
  (props) =>
    safeCssObjOn(
      props.checked,
      {
        backgroundColor: "#f23",
      },
      { backgroundColor: "#E5E7EB" }
    )
);

export const CheckboxIcon_ = styled.span<{ checked: boolean }>(
  {
    color: "#ffffff",
    transitionProperty: "opacity",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "100ms",
  },
  (props) => safeCssObjOn(props.checked, { opacity: 1 }, { opacity: 0 })
);

export const CheckboxLabel_ = styled.span<{ checked: boolean }>({
  fontWeight: 600,
  color: "14px",
});
