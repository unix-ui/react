import { SxProps, RipplesAttr, ThemeProps } from "../@ui-kit/types/@types";

export type T_DEFINED_STYLED = {
  noDefaultStyling?: boolean;
};

export type T_STRING_GENER<T> = T | (string & {});

export type T_DEFAULT_BUTTON_PROPS = T_ACTION_PROPS & {
  ripple?: boolean;
  isLoading?: boolean;
  rippleColor?: string;
  rippleRenderer?: (props: Partial<RipplesAttr>) => JSX.Element;
};

export type T_ACTION_PROPS = {
  loadingSx?: SxProps;
  disabledSx?: SxProps;
};

export type T_STYLED_THEME<T> = T & { theme?: ThemeProps };
