import {
  ButtonHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { useRipple } from "../../hooks";
import { RipplesAttr } from "../../types";
import { cn } from "../../../utils/cn";
import { useRippleBaseStyled } from "./ripple-base.styled";
import { RippleBaseProps } from "./@types";

const RippleBase = forwardRef<HTMLButtonElement, RippleBaseProps>(
  (props, _ref) => {
    const ref = useRef<HTMLButtonElement>(null);
    const {
      children,
      disableRipple,
      rippleColor,
      className,
      rippleRenderer,
      sx,
      ...rest
    } = props;
    useImperativeHandle(_ref, () => ref.current!);
    const { ripple } = useRippleBaseStyled({ sx });
    const ripples = useRipple(ref, disableRipple, rippleColor, rippleRenderer);

    return (
      <button ref={ref} className={cn(ripple, className)} {...rest}>
        {children}
        {ripples}
      </button>
    );
  }
);

export default RippleBase;
