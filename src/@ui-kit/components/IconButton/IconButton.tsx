import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { LoadingIcon } from "../LoadingIcon/LoadingIcon";
import { useRipple } from "../../hooks/useRipple";
import { IconButtonProps } from "./@types";

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, _ref) => {
    const ref = useRef<HTMLButtonElement | null>(null);
    const {
      children,
      className,
      ripple,
      isLoading,
      onClick,
      size,
      rippleColor,
      ...rest
    } = props;
    useImperativeHandle(_ref, () => ref.current!);
    const ripples = useRipple(ref, !ripple && isLoading, rippleColor);

    return (
      <button
        ref={ref}
        className={classNames(
          // mockup styles (visual styles for button)
          "bg-primary hover:bg-indigo-700 text-white rounded-md",

          className
        )}
        // replace default size instead of auto
        style={{
          width: size || "auto",
          height: size || "auto",
        }}
        onClick={(e) => {
          onClick && !isLoading && onClick(e);
        }}
        {...rest}
      >
        {children}

        {/* loading icon */}
        {isLoading && (
          <span className="absolute top-0 left-0 h-full w-full z-1 flex justify-center items-center bg-gray-300 text-gray-700">
            <LoadingIcon fontSize={20} />
          </span>
        )}

        {/* ripple effects */}
        {ripple && ripples}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };
