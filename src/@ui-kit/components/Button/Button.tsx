import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { LoadingIcon } from "../LoadingIcon/LoadingIcon";
import { useRipple } from "../../hooks/useRipple";
import { safeObj } from "../../../utils/safeObj";
import { useTheme } from "../../hooks";
import { Button_, LoadingWrapper_ } from "./button.styled";
import { _defaultButtonProps } from "./_default";
import { _defaultColors } from "../../provider/_default";
import { ButtonProps } from "./@types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((_props, _ref) => {
  const [theme] = useTheme();
  const button = theme?.theme?.[theme.currentTheme]?.Button;
  const props = {
    ..._defaultButtonProps,
    ...safeObj(button?.defaultProps?.all),
    ...safeObj(
      button?.defaultProps?.[_props.variant || _defaultButtonProps.variant]
    ),
    ...safeObj({
      loadingRenderer:
        button?.overrideStyles?.[_props.variant || _defaultButtonProps.variant]
          ?.loadingRenderer,
    }),
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
    <Button_ ref={ref} onClick={handleClick} isLoading={isLoading} {...rest}>
      {startIcon}

      {children}

      {endIcon}

      {isLoading && (
        <>
          {props.loadingRenderer ? (
            props.loadingRenderer(props.colorScheme!)
          ) : (
            <LoadingWrapper_
              colorScheme={props.colorScheme}
              variant={props.variant}
              loadingSx={props.loadingSx}
            >
              <LoadingIcon fontSize={20} />
            </LoadingWrapper_>
          )}
        </>
      )}

      {ripple && !isLoading && ripples}
    </Button_>
  );
});

Button.displayName = "Button";

export { Button };
