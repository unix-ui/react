import { T_OVERRIDE_SX } from "../../@types/@types";
import { CheckboxProps } from "../components/Checkbox";

type CheckboxDefaultProps<T extends string> = {
  [K in T]?: CheckboxProps;
};

type CheckboxSizes<T extends string> = {
  [K in T]?: {
    checkbox: {
      checked: T_OVERRIDE_SX;
      unchecked: T_OVERRIDE_SX;
    };
    icon?: T_OVERRIDE_SX;
  };
};

type CheckboxOverrideStyles = {
  checkbox?: {
    checked?: T_OVERRIDE_SX;
    unchecked?: T_OVERRIDE_SX;
  };
  removeDefaultStyling?: boolean;
  label?: T_OVERRIDE_SX;
  styles?: T_OVERRIDE_SX;
};

export type CheckboxTheme = {
  defaultProps?: CheckboxDefaultProps<"all" | "default"> & {
    [props: string]: CheckboxProps | undefined;
  };
  overrideStyles?: {
    default?: CheckboxOverrideStyles;
    [props: string]: CheckboxOverrideStyles | undefined;
  };
  sizes?: CheckboxSizes<"xs" | "sm" | "md" | "lg" | "xl"> & {
    [props: string]:
      | {
          checkbox: {
            checked: T_OVERRIDE_SX;
            unchecked: T_OVERRIDE_SX;
          };
          icon?: T_OVERRIDE_SX;
        }
      | undefined;
  };
};
