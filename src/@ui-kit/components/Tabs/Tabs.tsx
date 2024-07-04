"use client";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Tabs_, TabIndicator_ } from "./tab.styled";
import { safeObj } from "../../../utils/safeObj";
import { toArray } from "../../../utils/toArray";
import { TabsProps } from "./@types";
import { useTheme } from "../../hooks";
import { _defaultTabsProps } from "./_default";

export type IndicatorStylePos = {
  left: number;
  width: number;
  height: number;
  top: number;
};

const Tabs = forwardRef<HTMLDivElement, TabsProps>((_props, _ref) => {
  const [theme] = useTheme();
  const props = {
    ..._defaultTabsProps,
    ...theme?.theme?.[theme.currentTheme]?.Tabs?.defaultProps,
    ..._props,
  };
  const { value, onChange, indicatorRenderer, ...rest } = props;

  const ref = useRef<HTMLDivElement | null>(null);
  useImperativeHandle(_ref, () => ref.current!);

  const [showIndicator, setShowIndicator] = useState(false);
  const handleIndicator = useCallback(() => {
    const el = ref.current
      ?.querySelectorAll("[data-unix-component=tab]")
      ?.[value]?.getBoundingClientRect();

    const parent_rect = ref.current?.getBoundingClientRect();

    const indicatorEl = ref.current?.querySelector<HTMLElement>(
      "[data-unix-component=tabs-indicator]"
    );

    setShowIndicator(true);
    if (indicatorEl) {
      indicatorEl.style.left =
        (el?.left || 0) - (parent_rect?.left || 0) + "px";
      indicatorEl.style.width = el?.width + "px";
    }
  }, [value]);

  useEffect(() => {
    if (ref.current) {
      handleIndicator();
    }
  }, [value, handleIndicator, showIndicator]);

  const indicatorElem = indicatorRenderer ? indicatorRenderer() : <></>;
  return (
    <Tabs_ ref={ref} {...rest}>
      {toArray(props.children).map((value: any, i) => {
        return {
          ...safeObj(value),
          props: {
            ...safeObj(value?.props),
            onClick: (e) => {
              handleIndicator();
              onChange && onChange(i);
              value?.props?.onClick && value?.props?.onClick(e);
            },

            "data-unix-component": "tab",
          },
        };
      })}

      {showIndicator &&
        (indicatorRenderer ? (
          {
            ...indicatorElem,
            props: {
              "data-unix-component": "tabs-indicator",

              ...safeObj(indicatorElem?.props),
            },
          }
        ) : (
          <TabIndicator_
            colorScheme={props.colorScheme}
            data-unix-component="tabs-indicator"
          />
        ))}
    </Tabs_>
  );
});

Tabs.displayName = "Tabs";

export { Tabs };
