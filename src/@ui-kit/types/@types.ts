import { CSSObject } from "@emotion/react";
import { ButtonTheme } from "./@button";
import { ColorShades } from "./@colors";
import { CheckboxTheme } from "./@checkbox";
import { DatePickerTheme } from "./@datepicker";
import { TabsProps } from "../components/Tabs/@types";
import { T_WITH_NO_DEFAULT_STYLE, T_WITH_NO_THEME } from "../../@types/@types";

export type SxProps = CSSObject;

type ColorsGen<T extends string> = {
  [K in T]: Partial<ColorShades>;
};

export type Colors = Partial<
  ColorsGen<"primary" | "red" | "green" | "orange" | "blue">
> & { [props: string & {}]: Partial<ColorShades> };

export type ThemeProps = {
  currentTheme: string;
  globalStyles?: SxProps;
  theme?: {
    [props: string]: {
      colors?: Colors;

      Button?: ButtonTheme;
      Checkbox?: CheckboxTheme;
      Datepicker?: DatePickerTheme;
      Tabs?: {
        defaultProps?: TabsProps;
        overrideStyles?: T_WITH_NO_DEFAULT_STYLE<{
          styles?: SxProps;
          indicator?: T_WITH_NO_DEFAULT_STYLE<{ styles: SxProps }>;
        }>;
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
