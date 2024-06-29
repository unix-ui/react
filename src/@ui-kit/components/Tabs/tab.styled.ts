import styled from "@emotion/styled";
import { unit } from "../../utils";
import { safeCssObj } from "../../../utils/safeObj";
import { HTMLAttributes } from "react";
import { ThemeProps } from "../../types";
import {
  T_WITH_NO_DEFAULT_STYLE,
  T_WITH_SCHEME,
  T_WITH_THEME,
} from "../../../@types/@types";
import { getColor } from "../../../utils/get";

type TabsProps = T_WITH_NO_DEFAULT_STYLE<
  T_WITH_SCHEME<{
    onChange?: (value: number) => void;
    indicatorProps?: HTMLAttributes<HTMLSpanElement>;
    indicatorRenderer?: () => JSX.Element;
    tabs: string[];
  }>
>;

export const Tabs_ = styled.div<T_WITH_THEME<TabsProps>>(
  ({ theme, ...props }) => {
    const tabs = theme?.theme?.[theme.currentTheme]?.Tabs;

    return {
      ...safeCssObj(
        tabs?.overrideStyles?.noDefaultStyling || props.noDefaultStyling
          ? {}
          : {
              display: "flex",
              overflow: "hidden",
              position: "relative",
              gap: "0.5rem",
              justifyContent: "center",
              alignItems: "center",
              width: "fit-content",
              borderRadius: unit.remSpacing(2),
              "[data-unix-component=tab]": { position: "relative", zIndex: 2 },
              ...safeCssObj(props.sx),
            }
      ),
      ...safeCssObj(tabs?.overrideStyles?.styles),
      ...safeCssObj(props.sx),
    };
  }
);

export const TabIndicator_ = styled.span<
  T_WITH_SCHEME<T_WITH_NO_DEFAULT_STYLE<{ theme?: ThemeProps }>>
>(({ theme, ...props }) => {
  const tabs = theme?.theme?.[theme.currentTheme]?.Tabs;

  const color = getColor(theme, props.colorScheme);
  return {
    ...safeCssObj(
      tabs?.overrideStyles?.noDefaultStyling ||
        props.noDefaultStyling ||
        tabs?.overrideStyles?.indicator?.noDefaultStyling
        ? {}
        : {
            borderRadius: unit.remSpacing(2),
            height: "100%",
            transition: "left 150ms",
            position: "absolute",
            display: "inline-block",
            zIndex: 0,
            backgroundColor: color?.main,
          }
    ),
    ...safeCssObj(tabs?.overrideStyles?.indicator?.styles),
    ...safeCssObj(props.sx),
  };
});
