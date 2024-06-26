import { ComponentProps } from "react";
import { SxProps } from ".";
import { T_OVERRIDE_SX, T_VARIANTS_THEME } from "../../@types/@types";
import { Button_ } from "../components/Button/button.styled";
import { ButtonProps } from "../components";

type ButtonOverrideStyles = {
  removeDefaultStyling?: boolean;
  disabled?: T_OVERRIDE_SX;
  loading?: T_OVERRIDE_SX;
  button?: T_OVERRIDE_SX;
  loadingRenderer?: (colorScheme: string) => JSX.Element;
};

type ButtonOverrideStylesOptions<T extends string> = {
  [K in T]?: ButtonOverrideStyles | undefined;
};

type ButtonDefaultProps<T extends string> = {
  [K in T]?: ButtonProps;
};

export type ButtonTheme = {
  defaultProps?: ButtonDefaultProps<
    "all" | "default" | "outlined" | "ghost"
  > & {
    [props: string]: Partial<ComponentProps<typeof Button_>> | undefined;
  };
  overrideStyles?: ButtonOverrideStylesOptions<
    "default" | "outlined" | "ghost"
  > & {
    [props: string]: ButtonOverrideStyles | undefined;
  };
  sizes?: T_VARIANTS_THEME<"xs" | "sm" | "md" | "lg" | "xl"> & {
    [props: string]: { styles?: SxProps } | undefined;
  };
};
