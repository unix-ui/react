import { ComponentProps } from "react";
import { DatePicker_ } from "./datepicker.styled";
import { Moment } from "moment";
import { T_WITH_NO_THEME } from "../../../@types/@types";

export type DatepickerProps = T_WITH_NO_THEME<
  Omit<ComponentProps<typeof DatePicker_>, "value" | "onChange"> & {
    value?: Moment;
    onChange?: (e: Moment) => void;
    calenderRenderer?: (props: CalenderRendererProps) => JSX.Element;
    controlsRenderer?: (props: CalenderControlsRendererProps) => JSX.Element;
  }
>;

export type CalenderRendererProps = {
  currentMonthDates: number[];
  prevMonthDates: number[];
  nextMonthDates: number[];
  date: Moment;

  handleMonthChange: (month: number) => void;
  handleYearChange: (year: number) => void;

  handleDateClickPrevMonth: (date: number) => void;
  handleDateClickCurrentMonth: (date: number) => void;
  handleDateClickNextMonth: (date: number) => void;

  handlePrevMonth: () => void;
  handleNextMonth: () => void;
};

export type CalenderControlsRendererProps = {
  handleMonthChange: (month: number) => void;
  handleYearChange: (year: number) => void;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
};
