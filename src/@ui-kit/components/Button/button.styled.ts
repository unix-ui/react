import styled from "@emotion/styled";
import { safeCssObj, safeCssObjOn } from "../../../utils/safeObj";
import { SxProps } from "../../types/@types";
import { colors } from "../../colors";
import {
  T_PRE_BUTTON_PROPS,
  T_WITH_NO_DEFAULT_STYLE,
  T_STRING_GENER,
  T_WITH_THEME,
} from "../../../@types/@types";
import { unit } from "../../utils/units";
import { alpha } from "../../utils/alpha";

type ButtonProps = T_WITH_NO_DEFAULT_STYLE<
  T_PRE_BUTTON_PROPS & {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    variant?: "default" | "outlined" | "ghost" | (string & {});
    colorScheme?: keyof typeof colors;
    size?: T_STRING_GENER<"xs" | "sm" | "md" | "lg" | "xl">;
    loadingRenderer?: (colorScheme: string) => JSX.Element;
  }
>;

const Button_ = styled.button<T_WITH_THEME<ButtonProps>>(
  // default
  ({ theme, ...props }) => {
    const overrideStyles =
      theme?.theme?.[theme.currentTheme]?.Button?.overrideStyles?.[
        props.variant!
      ];

    const color =
      theme?.theme?.[theme.currentTheme]?.colors?.[props.colorScheme || ""] ||
      colors[props.colorScheme || ""];
    const sizes =
      theme?.theme?.[theme.currentTheme]?.Button?.sizes?.[props.size || ""];
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
          transitionDuration: "200ms",
          overflow: "hidden",
          position: "relative",
          gap: "0.5rem",
          fontWeight: 600,
          userSelect: "none",
          cursor: "pointer",
          ...safeCssObj(
            props.size === "xs" && {
              paddingTop: unit.remSpacing(1),
              paddingBottom: unit.remSpacing(1),
              paddingLeft: unit.remSpacing(3),
              paddingRight: unit.remSpacing(3),
              borderRadius: unit.remSpacing(1),
              fontSize: 12,
            }
          ),
          ...safeCssObj(
            props.size === "sm" && {
              paddingTop: unit.remSpacing(2),
              paddingBottom: unit.remSpacing(2),
              paddingLeft: unit.remSpacing(4),
              paddingRight: unit.remSpacing(4),
              borderRadius: unit.remSpacing(1.5),
              fontSize: 14,
            }
          ),
          ...safeCssObj(
            props.size === "md" && {
              paddingTop: unit.remSpacing(3),
              paddingBottom: unit.remSpacing(3),
              paddingLeft: unit.remSpacing(6),
              paddingRight: unit.remSpacing(6),
              borderRadius: unit.remSpacing(2),
              fontSize: 14,
            }
          ),
          ...safeCssObj(
            props.size === "lg" && {
              paddingTop: unit.remSpacing(4),
              paddingBottom: unit.remSpacing(4),
              paddingLeft: unit.remSpacing(7),
              paddingRight: unit.remSpacing(7),
              borderRadius: unit.remSpacing(2),
              fontSize: 14,
            }
          ),
          ...safeCssObj(
            props.size === "xl" && {
              paddingTop: unit.remSpacing(5),
              paddingBottom: unit.remSpacing(5),
              paddingLeft: unit.remSpacing(9),
              paddingRight: unit.remSpacing(9),
              borderRadius: unit.remSpacing(2),
              fontSize: 16,
            }
          ),
          ...safeCssObj(
            props.variant === "default" && {
              backgroundColor: color?.main,
              color: "#ffffff",
              "&:hover": {
                backgroundColor: color?.hover,
              },
            }
          ),
          ...safeCssObj(
            props.variant === "ghost" && {
              backgroundColor: "transparent",
              color: "#2a2c2f",
              "&:hover": {
                backgroundColor: "#f0f0f1",
              },
            }
          ),
          ...safeCssObj(
            props.variant === "outlined" &&
              (props.isLoading
                ? {
                    color: "transparent",
                    background: "transparent",
                    boxShadow: `inset 0 0 0 1px ${color?.main}`,
                  }
                : {
                    boxShadow: `inset 0 0 0 1px ${color?.main}`,
                    color: color?.main,
                    background: "transparent",
                    "&:hover": {
                      backgroundColor: alpha(color?.hover!, 0.1),
                    },
                  })
          ),
        }
      ),

      ...safeCssObj(overrideStyles?.button?.styles),
      ...safeCssObj(overrideStyles?.button?.styles),
      ...safeCssObj(props?.sx),
      ...safeCssObj(overrideStyles?.disabled?.styles),

      ...safeCssObj(
        theme?.theme?.[theme.currentTheme]?.Button?.sizes?.[props.size || ""]
          ?.styles
      ),
    };
  },

  // size
  ({ theme, ...props }) => {
    const sizes =
      theme?.theme?.[theme.currentTheme]?.Button?.sizes?.[props.size || ""];
    const overrideStyles =
      theme?.theme?.[theme.currentTheme]?.Button?.overrideStyles?.[
        props.variant!
      ];
    if (
      (sizes as any)?.removeDefaultStyling ||
      overrideStyles?.removeDefaultStyling ||
      props.noDefaultStyling ||
      overrideStyles?.button?.removeDefaultStyling
    )
      return {};
  },

  ({ theme, ...props }) => {
    const overrideStyles =
      theme?.theme?.[theme.currentTheme]?.Button?.overrideStyles?.[
        props.variant!
      ];
    if (
      overrideStyles?.removeDefaultStyling ||
      props.noDefaultStyling ||
      overrideStyles?.disabled?.removeDefaultStyling
    )
      return {};
    return safeCssObj(
      props.disabled && {
        pointerEvents: "none",
        opacity: 0.5,
        ...safeCssObj(props.disabledSx),
      }
    );
  }
);

const LoadingWrapper_ = styled.span<
  T_WITH_THEME<{
    loadingSx?: SxProps;
    noDefaultStyling?: boolean;
    variant?: ButtonProps["variant"];
    colorScheme?: ButtonProps["colorScheme"];
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
      }
    );
  },

  ({ theme, ...props }) => {
    const color =
      theme?.theme?.[theme.currentTheme]?.colors?.[props.colorScheme || ""] ||
      colors[props.colorScheme || ""];
    const overrideStyles =
      theme?.theme?.[theme.currentTheme]?.Button?.overrideStyles?.[
        props.variant!
      ];
    if (
      overrideStyles?.removeDefaultStyling ||
      props.noDefaultStyling ||
      overrideStyles?.loading?.removeDefaultStyling
    )
      return {};
    if (props.variant === "outlined")
      return { color: color?.main, backgroundColor: "transparent" };
    return { color: "#374151", backgroundColor: "#D1D5DB" };
  },

  ({ theme, ...props }) => {
    const overrideStyles =
      theme?.theme?.[theme.currentTheme]?.Button?.overrideStyles?.[
        props.variant!
      ];

    return safeCssObj(overrideStyles?.loading?.styles);
  },

  (props) => safeCssObj(props?.loadingSx)
);

export { Button_, LoadingWrapper_ };
