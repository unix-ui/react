import React, { forwardRef, SVGProps, useRef } from "react";
import { CheckboxProps } from "./@types";
import { safeObj } from "../../../utils/safeObj";
import {
  CheckboxButton_,
  CheckboxIcon_,
  CheckboxLabel_,
  CheckboxSpan_,
} from "./checkbox.styled";
import { useTheme } from "../../hooks";
import { _defaultCheckboxProps } from "./_default.ts";
import { _defaultColors } from "../../provider/_default.ts";
import { getColor } from "../../../utils/getColor.ts";

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>((_props, ref) => {
  const [theme] = useTheme();
  const checkbox = theme?.theme?.[theme.currentTheme]?.Checkbox;
  const props = {
    ..._defaultCheckboxProps,
    ...safeObj(theme?.theme?.[theme.currentTheme]?.Checkbox?.defaultProps),
    ...safeObj(_props),
  };

  const {
    size,
    checkBoxProps,
    labelProps,
    label,
    iconSize,
    inputProps,
    onClick,
    onChange,
    value,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type,
    ...rest
  } = props;

  const { style: checkBoxStyle, ...restCheckbox } = safeObj(checkBoxProps);

  const input_ref = useRef<HTMLInputElement>(null);

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
        size={props.size || 20}
        style={{
          background: props.checked
            ? getColor(theme, props.colorScheme)?.main
            : "#e1e2e4",
          ...safeObj(props.checked && checkbox?.overrideStyles?.checked),
          ...checkBoxStyle,
        }}
        {...restCheckbox}
      >
        {props.checked && (
          <CheckIcon
            style={{ opacity: props.checked ? "1" : "0" }}
            width={iconSize || 20}
          />
        )}
      </CheckboxSpan_>

      <input
        ref={input_ref}
        hidden
        type="checkbox"
        value={value}
        onChange={onChange}
        {...inputProps}
      />
      {label && <CheckboxLabel_ {...labelProps}>{label}</CheckboxLabel_>}
    </CheckboxButton_>
  );
});

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 133 133" version="1.1" {...props}>
      <g
        stroke="none"
        fontSize={props.fontSize}
        stroke-width="14"
        fill="none"
        fillRule="evenodd"
      >
        <CheckboxIcon_
          id="check"
          stroke="currentColor"
          points="41 70 56 85 92 49"
        />
      </g>
    </svg>
  );
}

export default Checkbox;
