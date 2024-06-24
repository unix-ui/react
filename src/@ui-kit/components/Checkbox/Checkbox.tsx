import React, {
  ButtonHTMLAttributes,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  SVGProps,
  useRef,
} from "react";
import { CheckboxProps } from "./@types";
import { cn } from "../../../utils/cn";
import { safeObj } from "../../../utils/safeObj";
import { CheckboxButton_, CheckboxSpan_ } from "./checkbox.styled";

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>((props, ref) => {
  const {
    size,
    checkBoxProps,
    labelProps,
    label,
    iconSize,
    className,
    inputProps,
    onClick,
    onChange,
    ...rest
  } = props;

  const {
    style: checkBoxStyle,
    className: checkBoxClassName,
    ...checkbox
  } = safeObj(checkBoxProps);

  const { className: labelClassName, ...restLabel } = safeObj(labelProps);

  const {
    onChange: inputOnChange,
    type,
    hidden,
    className: iconClassName,
    ...restInputProps
  } = safeObj(inputProps);

  const input_ref = useRef<HTMLInputElement>(null);

  // change the default size of the checkbox
  const DEFAULT_SIZE = 20;

  // change the default size of the checked icon
  const DEFAULT_ICON_SIZE = 14;

  return (
    <CheckboxButton_
      onClick={(e) => {
        input_ref.current?.click();
        onClick && onClick(e);
      }}
      ref={ref}
      {...rest}
    >
      <CheckboxSpan_
        checked={!!props.checked}
        style={{
          width: size || DEFAULT_SIZE,
          height: size || DEFAULT_SIZE,
          ...checkBoxStyle,
        }}
        {...checkbox}
      >
        <CheckIcon
          fontSize={iconSize || DEFAULT_ICON_SIZE}
          className={cn(styled.icon, iconClassName)}
        />
      </CheckboxSpan_>
      <input
        ref={input_ref}
        onChange={onChange}
        hidden
        type="checkbox"
        {...restInputProps}
      />
      {label && (
        <span className={cn(styled.label, labelClassName)} {...restLabel}>
          {label}
        </span>
      )}
    </CheckboxButton_>
  );
});

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Checkbox;
