import { CSSObject } from "@emotion/react";
import { T_WITH_NO_DEFAULT_STYLE } from "../../@types/@types";
import { ButtonTheme } from "./@button";
import { ColorShades } from "./@colors";
import { CheckboxTheme } from "./@checkbox";
import { DatepickerProps } from "../components/Datepickers";

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
      Datepicker?: {
        defaultProps?: DatepickerProps;
        overrideStyles?: T_WITH_NO_DEFAULT_STYLE<{
          dateButtons?: SxProps;
          currentMonthButtonsSx?: SxProps;
          nextMonthButtonsSx?: SxProps;
          prevMonthButtonsSx?: SxProps;
          currentDateSx?: SxProps;
          activeDateStyle?: SxProps;
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
