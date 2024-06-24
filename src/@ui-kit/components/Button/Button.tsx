import React, {
  ComponentProps,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { LoadingIcon } from "../LoadingIcon/LoadingIcon";
import { useRipple } from "../../hooks/useRipple";
import { safeObj } from "../../../utils/safeObj";
import { useTheme } from "../../hooks";
import { ButtonWrapper_, LoadingWrapper_ } from "./button.styled";
import { _defaultButtonProps } from "./_default";
import { _defaultColors } from "../../provider/_default";

const Button = forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof ButtonWrapper_>
>((_props, _ref) => {
  const [theme] = useTheme();
  const props = {
    ..._defaultButtonProps,
    ...safeObj(theme?.theme?.[theme.currentTheme]?.Button?.defaultProps?.all),
    ...safeObj(
      theme?.theme?.[theme.currentTheme]?.Button?.defaultProps?.[
        _props.variant || _defaultButtonProps.variant
      ]
    ),
    ...safeObj(_props),
  } as typeof _props;

  const { children, ripple, startIcon, endIcon, isLoading, onClick, ...rest } =
    props;

  const ref = useRef<HTMLButtonElement>(null);

  useImperativeHandle(_ref, () => ref.current!);

  const ripples = useRipple(
    ref,
    !ripple && isLoading,
    props.rippleColor ||
      (props.variant === "outlined"
        ? (
            theme?.theme?.[theme.currentTheme]?.colors?.[
              props.colorScheme || ""
            ] || _defaultColors[props.colorScheme || ""]
          )?.main
        : props.variant === "ghost"
        ? "#b4b6bb"
        : ""),
    props.rippleRenderer,
    props.rippleDuration
  );

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    onClick && !isLoading && onClick(e);
  };

  return (
    <ButtonWrapper_ ref={ref} onClick={handleClick} {...rest}>
      {startIcon}

      {children}

      {endIcon}

      {isLoading && (
        <LoadingWrapper_ variant={props.variant} loadingSx={props.loadingSx}>
          <LoadingIcon fontSize={20} />
        </LoadingWrapper_>
      )}

      {ripple && !isLoading && ripples}
    </ButtonWrapper_>
  );
});

Button.displayName = "Button";

export { Button };
