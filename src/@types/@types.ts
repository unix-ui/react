import { colors } from "../@ui-kit/colors";
import { SxProps, RipplesAttr, ThemeProps } from "../@ui-kit/types/@types";

export type T_WITH_NO_DEFAULT_STYLE<T> = T & {
  noDefaultStyling?: boolean;
};

export type T_STRING_GENER<T> = T | (string & {});

export type T_PRE_BUTTON_PROPS = T_ACTION_PROPS & {
  ripple?: boolean;
  isLoading?: boolean;
  rippleColor?: string;
  rippleRenderer?: (props: Partial<RipplesAttr>) => JSX.Element;
};

export type T_ACTION_PROPS = {
  loadingSx?: SxProps;
  disabledSx?: SxProps;
};

export type T_WITH_THEME<T> = T & { theme?: ThemeProps };
export type T_WITH_NO_THEME<T> = Omit<T, "theme">;
export type T_WITH_SCHEME<T> = T & {
  colorScheme?: keyof typeof colors;
};
export type T_WITH_RIPPLE<T> = T & {
  disableRipple?: boolean;
  rippleColor?: string;
  rippleRenderer?: (props: Partial<RipplesAttr>) => JSX.Element;
  ripple?: boolean;
  isLoading?: boolean;
  rippleDuration?: number;
};

export type T_OVERRIDE_SX = {
  removeDefaultStyling?: boolean;
  styles?: SxProps;
};

export type T_VARIANTS_THEME<T extends string> = {
  [K in T]?: T_OVERRIDE_SX;
};
export type T_WITH_SX<T> = T & {
  sx?: SxProps;
};
