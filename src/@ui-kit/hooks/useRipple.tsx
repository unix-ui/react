import { useDebounce } from "@uidotdev/usehooks";
import { Fragment, useEffect, useState } from "react";
import { RipplesAttr } from "../types/@types";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const rippleKeyframes = keyframes({
  "0%": { scale: "0", opacity: "0.2" },
  "40%": { scale: "3", opacity: "0.2" },
  "100%": { scale: "3", opacity: "0" },
});

const RippleSpan_ = styled.span<{ duration: number }>(
  {
    display: "inline-block",
    position: "absolute",
    borderRadius: "9999px",
    pointerEvents: "none",
  },
  (props) => ({
    animation: `${rippleKeyframes} ${props.duration}ms 1 linear forwards`,
  })
);

export const useRipple = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  disable?: boolean,
  color?: string,
  rippleRenderer?: (props: Partial<RipplesAttr>) => JSX.Element,
  rippleDuration?: number
) => {
  const [ripples, setRipples] = useState<RipplesAttr[]>([]);
  rippleRenderer &&
    rippleRenderer({})?.type === Fragment &&
    console.warn(
      "Fragments are not supported as a ripple renderer. Please provide a function that returns a React element."
    );

  useEffect(() => {
    if (ref?.current && !disable) {
      const elem = ref.current;

      const clickHandler = (e: MouseEvent) => {
        const { width, height, top, left } = elem.getBoundingClientRect();
        const diameter = Math.max(width, height);

        setRipples((p) => [
          ...p,
          {
            top: e.clientY - top - diameter / 2,
            left: e.clientX - left - diameter / 2,
            height: diameter,
            width: diameter,
          },
        ]);
      };

      elem.addEventListener("click", clickHandler);

      return () => {
        elem.removeEventListener("click", clickHandler);
      };
    }
  }, [disable, ref, ripples]);

  const deb = useDebounce(
    ripples,
    rippleDuration ||
      (rippleRenderer
        ? rippleRenderer({})?.props?.["date-ripple-duration"]
        : 800)
  );

  useEffect(() => {
    if (deb.length) {
      setRipples([]);
    }
  }, [deb.length]);

  return disable
    ? []
    : ripples.map((value, i) => (
        <Fragment key={"a" + i}>
          {rippleRenderer ? (
            rippleRenderer(value)
          ) : (
            <RippleSpan_
              duration={rippleDuration || 800}
              style={{
                left: value.left,
                top: value.top,
                width: value.width,
                height: value.height,
                background: color || "#fff",
              }}
            />
          )}
        </Fragment>
      ));
};
