import { forwardRef, useEffect, useRef, useState } from "react";
import { TransitionProps } from "./@types";
import { Transition_ } from "./transition.styled";

const Transition = forwardRef<HTMLDivElement, TransitionProps>((props, ref) => {
  const [transition, setTransition] = useState(props.show);
  const timeoutRef = useRef<number>();
  useEffect(() => {
    if (!props.show) {
      timeoutRef.current = setTimeout(() => {
        setTransition(false);
      }, props.exitingStyle?.duration || 150);
    } else setTransition(props.show);
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [props.exitingStyle?.duration, props.show]);

  return transition ? <Transition_ ref={ref} {...props} /> : <></>;
});

export { Transition };
