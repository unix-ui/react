"use client";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { useRipple } from "../../hooks";
import { RippleBase_ } from "./ripple-base.styled";
import { RippleBaseProps } from "./@types";

const RippleBase = forwardRef<HTMLButtonElement, RippleBaseProps>(
  (props, _ref) => {
    const ref = useRef<HTMLButtonElement>(null);
    const {
      children,
      disableRipple,
      rippleColor,
      rippleRenderer,
      rippleDuration,
      ...rest
    } = props;

    useImperativeHandle(_ref, () => ref.current!);
    const ripples = useRipple(
      ref,
      disableRipple,
      rippleColor,
      rippleRenderer,
      rippleDuration
    );

    return (
      <RippleBase_ ref={ref} {...rest}>
        {children}
        {ripples}
      </RippleBase_>
    );
  }
);

export { RippleBase };
