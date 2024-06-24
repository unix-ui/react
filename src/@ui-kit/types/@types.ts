import { CSSObject } from "@emotion/react";
import { ComponentProps } from "react";
import { ButtonWrapper_ } from "../components/Button/button.styled";

export type SxProps = CSSObject;

type ColorsGen<T extends string> = {
  [K in T]: Partial<ColorShades>;
};

export type Colors = Partial<
  ColorsGen<"primary" | "red" | "green" | "orange" | "blue">
> & { [props: string & {}]: Partial<ColorShades> };

type T_OVERRIDE_STYLE = {
  removeDefaultStyling?: boolean;
  styles?: SxProps;
};

type ButtonOverrideStyles = {
  removeDefaultStyling?: boolean;
  disabled?: T_OVERRIDE_STYLE;
  loading?: T_OVERRIDE_STYLE;
  button?: T_OVERRIDE_STYLE;
};

type ButtonOverrideStylesOptions<T extends string> = {
  [K in T]?: ButtonOverrideStyles | undefined;
};

type ButtonSizes<T extends string> = {
  [K in T]?: { styles?: SxProps; removeDefaultStyling?: boolean } | undefined;
};

type ButtonDefaultProps<T extends string> = {
  [K in T]?: ComponentProps<typeof ButtonWrapper_>;
};

export type ThemeProps = {
  currentTheme: string;
  globalStyles?: SxProps;
  theme?: {
    [props: string]: {
      colors?: Colors;

      Button?: {
        defaultProps?: ButtonDefaultProps<
          "all" | "default" | "outlined" | "ghost"
        > & {
          [props: string]:
            | Partial<ComponentProps<typeof ButtonWrapper_>>
            | undefined;
        };
        overrideStyles?: ButtonOverrideStylesOptions<
          "default" | "outlined" | "ghost"
        > & {
          [props: string]: ButtonOverrideStyles | undefined;
        };
        sizes?: ButtonSizes<"xs" | "sm" | "md" | "lg" | "xl"> & {
          [props: string]: { styles?: SxProps } | undefined;
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

export type ColorShades = {
  main: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  hover: string;
  active: string;
};
