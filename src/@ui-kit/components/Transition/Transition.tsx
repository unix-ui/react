import { forwardRef, useEffect, useRef, useState } from "react";
import { TransitionProps } from "./@types";
import { TransitionWrapper_ } from "./transition.styled";

const Transition = forwardRef<HTMLDivElement, TransitionProps>((props, ref) => {
  const {
    exitingStyle,
    show,
    enteringStyle,
    activeStyle,
    className,
    sx,
    ...rest
  } = props;
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);
  const [style, setStyle] = useState(enteringStyle);
  const DURATION = style?.duration || 150;

  const timeoutRef = useRef<number>();
  useEffect(() => {
    if (show && !hasTransitionedIn) {
      setHasTransitionedIn(true);
      setStyle(activeStyle);
    } else if (!show && hasTransitionedIn) {
      setStyle(exitingStyle);
      timeoutRef.current = setTimeout(() => {
        setHasTransitionedIn(false);
        setStyle(enteringStyle);
      }, DURATION);
    }
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [
    DURATION,
    activeStyle,
    enteringStyle,
    exitingStyle,
    hasTransitionedIn,
    show,
  ]);

  return hasTransitionedIn || show ? (
    <TransitionWrapper_
      ref={ref}
      style={{
        transition: `all ${DURATION}ms ${style?.transitionType || "linear"}`,
      }}
      {...rest}
    />
  ) : (
    <></>
  );
});

export { Transition };
