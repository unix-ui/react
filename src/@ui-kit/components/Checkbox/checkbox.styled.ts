import { HTMLAttributes, InputHTMLAttributes } from "react";
import { safeCssObj, safeCssObjOn } from "../../../utils/safeObj";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { _defaultColors } from "../../provider/_default";

type CheckboxProps = {
  size?: number;
  labelProps?: Omit<HTMLAttributes<HTMLSpanElement>, "children">;
  inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, "children">;
  checkBoxProps?: HTMLAttributes<HTMLSpanElement>;
  label?: string;
  iconSize?: number;
  checked?: boolean;
  colorScheme?: keyof typeof _defaultColors;
};

export const CheckboxButton_ = styled.button<CheckboxProps>(
  {
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 4,
    background: "transparent",
  },
  (props) =>
    safeCssObj(props.disabled && { pointerEvents: "none", opacity: 0.5 })
);

export const CheckboxSpan_ = styled.span<{ size: number }>((props) => ({
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  transitionProperty:
    "color, background-color, border-color, text-decoration-color, fill, stroke",
  borderRadius: "0.25rem",
  transitionDuration: "100ms",
  width: props.size,
  height: props.size,
  "&>svg,img": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    color: "#ffffff",
    transitionProperty: "opacity",
    transitionDuration: "100ms",
  },
}));

export const CheckboxLabel_ = styled.span({
  color: "14px",
  fontWeight: 500,
});

const keyframes_check = keyframes({
  from: {
    strokeDasharray: "0, 75px",
    opacity: 0,
  },
  "10%": {
    opacity: 1,
  },
  to: {
    strokeDasharray: "75px, 75px",
  },
});

export const CheckboxIcon_ = styled.polygon({
  animation: `${keyframes_check} 0.34s linear forwards`,
  strokeDasharray: `0, 75px`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
});
