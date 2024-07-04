import { SxProps } from ".";
import { T_WITH_NO_DEFAULT_STYLE } from "../../@types/@types";
import { DatepickerProps } from "../components/Datepicker";

export type DatePickerTheme = {
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
