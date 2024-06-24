import styled from "@emotion/styled";
import { safeCssObj, safeCssObjOn } from "../../../utils/safeObj";
import { SxProps } from "../../types/@types";
import { _defaultColors } from "../../provider/_default";
import {
  T_DEFAULT_BUTTON_PROPS,
  T_DEFINED_STYLED,
  T_STRING_GENER,
  T_STYLED_THEME,
} from "../../../@types/@types";
import { unit } from "../../utils/units";
import { alpha } from "../../utils/alpha";

type ButtonProps = T_DEFINED_STYLED &
  T_DEFAULT_BUTTON_PROPS & {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    rippleDuration?: number;
    variant?: "default" | "outlined" | "ghost" | (string & {});
    colorScheme?: keyof typeof _defaultColors;
    size?: T_STRING_GENER<"xs" | "sm" | "md" | "lg" | "xl">;
  };

const ButtonWrapper_ = styled.button<T_STYLED_THEME<ButtonProps>>(
  // default
  ({ theme, ...props }) => {
    const overrideStyles =
      theme?.theme?.[theme.currentTheme]?.Button?.overrideStyles?.[
        props.variant!
      ];

    return {
      ...safeCssObjOn(
        overrideStyles?.removeDefaultStyling ||
          props.noDefaultStyling ||
          overrideStyles?.button?.removeDefaultStyling,
        {},
        {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transitionProperty:
            "color, background-color, border-color, text-decoration-color, fill, stroke ",
          transitionBehavior: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "200ms",
          overflow: "hidden",
          position: "relative",
          gap: "0.5rem",
          fontWeight: 600,
          userSelect: "none",
          cursor: "pointer",
        }
      ),
    };
  },

  // overrides
  ({ theme, ...props }) => {
    const overrideStyles =
      theme?.theme?.[theme.currentTheme]?.Button?.overrideStyles?.[
        props.variant!
      ];

    return safeCssObj(overrideStyles?.button?.styles);
  },

  // size
  ({ theme, ...props }) => {
    const sizes =
      theme?.theme?.[theme.currentTheme]?.Button?.sizes?.[props.size || ""];
    if ((sizes as any)?.removeDefaultStyling) return {};
    switch (props.size) {
      case "xs":
        return {
          paddingTop: unit.remSpacing(1),
          paddingBottom: unit.remSpacing(1),
          paddingLeft: unit.remSpacing(3),
          paddingRight: unit.remSpacing(3),
          borderRadius: unit.remSpacing(1),
          fontSize: 12,
        };
      case "sm":
        return {
          paddingTop: unit.remSpacing(2),
          paddingBottom: unit.remSpacing(2),
          paddingLeft: unit.remSpacing(4),
          paddingRight: unit.remSpacing(4),
          borderRadius: unit.remSpacing(1.5),
          fontSize: 14,
        };
      case "md":
        return {
          paddingTop: unit.remSpacing(3),
          paddingBottom: unit.remSpacing(3),
          paddingLeft: unit.remSpacing(6),
          paddingRight: unit.remSpacing(6),
          borderRadius: unit.remSpacing(2),
          fontSize: 14,
        };
      case "lg":
        return {
          paddingTop: unit.remSpacing(4),
          paddingBottom: unit.remSpacing(4),
          paddingLeft: unit.remSpacing(7),
          paddingRight: unit.remSpacing(7),
          borderRadius: unit.remSpacing(2),
          fontSize: 14,
        };
      case "xl":
        return {
          paddingTop: unit.remSpacing(5),
          paddingBottom: unit.remSpacing(5),
          paddingLeft: unit.remSpacing(9),
          paddingRight: unit.remSpacing(9),
          borderRadius: unit.remSpacing(2),
          fontSize: 16,
        };

      default:
        break;
    }
  },
  ({ theme, ...props }) =>
    safeCssObj(
      theme?.theme?.[theme.currentTheme]?.Button?.sizes?.[props.size || ""]
        ?.styles
    ),

  // sx
  (props) => safeCssObj(props?.sx),

  // disabled
  (props) =>
    safeCssObj(
      props.disabled && {
        pointerEvents: "none",
        opacity: 0.5,
        ...safeCssObj(props.disabledSx),
      }
    ),

  // color
  ({ theme, ...props }) => {
    const color =
      theme?.theme?.[theme.currentTheme]?.colors?.[props.colorScheme || ""] ||
      _defaultColors[props.colorScheme || ""];

    switch (props.variant) {
      case "default":
        return {
          backgroundColor: color?.main,
          color: "#ffffff",
          "&:hover": {
            backgroundColor: color?.hover,
          },
          "&:active": {
            backgroundColor: color?.active,
          },
        };
      case "ghost":
        return {
          backgroundColor: "transparent",
          color: "#2a2c2f",
          "&:hover": {
            backgroundColor: "#f0f0f1",
          },
          "&:active": {
            backgroundColor: "#e1e2e4",
          },
        };
      case "outlined":
        return {
          boxShadow: `inset 0 0 0 1px ${color?.main}`,
          color: color?.main,
          background: "transparent",
          "&:hover": {
            backgroundColor: alpha(color?.hover!, 0.1),
          },
          "&:active": {
            backgroundColor: alpha(color?.hover!, 0.16),
          },
        };
      default:
        return;
    }
  }
);

const LoadingWrapper_ = styled.span<
  T_STYLED_THEME<{
    loadingSx?: SxProps;
    noDefaultStyling?: boolean;
    variant?: ButtonProps["variant"];
  }>
>(
  ({ theme, ...props }) => {
    const overrideStyles =
      theme?.theme?.[theme.currentTheme]?.Button?.overrideStyles;

    return safeCssObjOn(
      overrideStyles?.removeDefaultStyling ||
        props.noDefaultStyling ||
        overrideStyles?.loading?.removeDefaultStyling,
      {},
      {
        display: "flex",
        position: "absolute",
        top: "0",
        left: "0",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        cursor: "not-allowed",
        color: "#374151",
        backgroundColor: "#D1D5DB",
      }
    );
  },

  ({ theme, ...props }) => {
    const overrideStyles =
      theme?.theme?.[theme.currentTheme]?.Button?.overrideStyles?.[
        props.variant!
      ];

    return safeCssObj(overrideStyles?.loading?.styles);
  },

  ({ theme, ...props }) => safeCssObj(props?.loadingSx)
);

export { ButtonWrapper_, LoadingWrapper_ };
