import { CSSObject } from "@emotion/react";
import { T_OVERRIDE_SX } from "../../@types/@types";
import { ButtonTheme } from "./@button";
import { CheckboxProps } from "../components/Checkbox/@types";
import { ColorShades } from "./@colors";

export type SxProps = CSSObject;

type ColorsGen<T extends string> = {
  [K in T]: Partial<ColorShades>;
};

export type Colors = Partial<
  ColorsGen<"primary" | "red" | "green" | "orange" | "blue">
> & { [props: string & {}]: Partial<ColorShades> };

type CheckboxOverrideStyles = {
  checkbox?: {
    checked?: T_OVERRIDE_SX;
    unchecked?: T_OVERRIDE_SX;
  };
  removeDefaultStyling?: boolean;
  label?: T_OVERRIDE_SX;
  styles?: T_OVERRIDE_SX;
};

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

export type ThemeProps = {
  currentTheme: string;
  globalStyles?: SxProps;
  theme?: {
    [props: string]: {
      colors?: Colors;

      Button?: ButtonTheme;
      Checkbox?: {
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
      globalStyles?: SxProps;
    };
  };
};

export type RipplesAttr = {
  top: number;
  left: number;
  width: number;
  height: number;
};
