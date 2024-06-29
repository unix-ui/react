import { HTMLAttributes, InputHTMLAttributes } from "react";
import { safeCssObj, safeCssObjOn } from "../../../utils/safeObj";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { colors } from "../../colors";
import { getColor } from "../../../utils/get";
import { ThemeProps } from "../../types";
import {
  T_STRING_GENER,
  T_WITH_NO_DEFAULT_STYLE,
  T_WITH_SX,
  T_WITH_THEME,
} from "../../../@types/@types";

type CheckboxProps = T_WITH_NO_DEFAULT_STYLE<{
  size?: number;
  labelProps?: T_WITH_SX<Omit<HTMLAttributes<HTMLSpanElement>, "children">>;
  inputProps?: T_WITH_SX<
    Omit<InputHTMLAttributes<HTMLInputElement>, "children">
  >;
  checkBoxProps?: T_WITH_SX<HTMLAttributes<HTMLSpanElement>>;
  label?: string;
  iconSize?: number;
  checked?: boolean;
  colorScheme?: keyof typeof colors;
  variant?: T_STRING_GENER<"default">;
}>;

export const CheckboxButton_ = styled.button<T_WITH_THEME<CheckboxProps>>(
  ({ theme, ...props }) => {
    return safeCssObjOn(
      theme?.theme?.[theme.currentTheme]?.Checkbox?.overrideStyles?.[
        props.variant || ""
      ]?.removeDefaultStyling || props.noDefaultStyling,
      {},
      {
        position: "relative",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 4,
        background: "transparent",
      }
    );
  },
  ({ theme, ...props }) =>
    safeCssObj(
      props.disabled &&
        (!props.noDefaultStyling ||
          theme?.theme?.[theme.currentTheme]?.Checkbox?.overrideStyles?.[
            props.variant || ""
          ]?.removeDefaultStyling) && {
          pointerEvents: "none",
          opacity: 0.5,
          userSelect: "none",
        }
    ),
  (props) => safeCssObj(props.sx),
  ({ theme, ...props }) =>
    safeCssObj(
      theme?.theme?.[theme.currentTheme]?.Checkbox?.overrideStyles?.[
        props.variant || ""
      ]?.styles
    )
);

export const CheckboxSpan_ = styled.span<
  T_WITH_NO_DEFAULT_STYLE<{
    size: number;
    checked?: boolean;
    colorScheme?: string;
    theme?: ThemeProps;
    variant?: CheckboxProps["variant"];
  }>
>(
  { display: "inline-flex" },
  ({ theme, ...props }) => {
    const _a =
      theme?.theme?.[theme.currentTheme]?.Checkbox?.overrideStyles?.[
        props.variant || ""
      ];

    return safeCssObjOn(
      _a?.removeDefaultStyling ||
        (props.checked
          ? _a?.checkbox?.checked?.removeDefaultStyling
          : _a?.checkbox?.unchecked?.removeDefaultStyling) ||
        props.noDefaultStyling,
      {},
      {
        display: "flex",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        transitionProperty:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
        transitionDuration: "100ms",
        borderRadius: "0.25rem",
        background: props.checked
          ? getColor(theme, props.colorScheme)?.main
          : "#e1e2e4",
        ...safeCssObjOn(
          props.checked,
          _a?.checkbox?.checked,
          _a?.checkbox?.unchecked
        ),
        "&>svg,img": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%) translateY(-50%)",
          color: "#ffffff",
          transitionProperty: "opacity",
          transitionDuration: "100ms",
        },
      }
    );
  },
  ({ theme, ...props }) => {
    const _a =
      theme?.theme?.[theme.currentTheme]?.Checkbox?.overrideStyles?.[
        props.variant || ""
      ];
    return safeCssObjOn(
      props.checked,
      _a?.checkbox?.checked?.styles,
      _a?.checkbox?.unchecked?.styles
    );
  },
  (props) => ({ width: props.size, height: props.size }),
  (props) => safeCssObj(props.sx)
);

export const CheckboxLabel_ = styled.span<
  T_WITH_NO_DEFAULT_STYLE<{
    theme?: ThemeProps;
    variant?: CheckboxProps["variant"];
  }>
>(
  ({ theme, ...props }) => {
    const _a =
      theme?.theme?.[theme.currentTheme]?.Checkbox?.overrideStyles?.[
        props.variant || ""
      ];

    return safeCssObjOn(
      _a?.removeDefaultStyling ||
        _a?.label?.removeDefaultStyling ||
        props.noDefaultStyling,
      {},
      {
        fontSize: "14px",
        fontWeight: 500,
      }
    );
  },
  ({ theme, ...props }) =>
    safeCssObj(
      theme?.theme?.[theme.currentTheme]?.Checkbox?.overrideStyles?.[
        props.variant || ""
      ]?.label?.styles
    ),
  (props) => safeCssObj(props.sx)
);

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
