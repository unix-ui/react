"use client";
import { CSSProperties, forwardRef, useEffect, useState } from "react";
import moment, { Moment } from "moment";
import { RippleBase } from "../RippleBase/RippleBase";
import { Select } from "../Select/Select";
import {
  _dateButtonSx,
  _inputDaysSx,
  _navButtonSx,
  Calendar_,
  CalendarDays_,
  DatePicker_,
  DatePickerButtons_,
} from "./datepicker.styled";
import { safeCssObj, safeObj } from "../../../utils/safeObj";
import { getColor } from "../../../utils/get";
import { DatepickerProps } from "./@types";
import { useTheme } from "../../hooks";
import { _defaultDatepickerProps } from "./_default";

const days = ["S", "M", "T", "W", "T", "F", "S"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Datepicker = forwardRef<HTMLDivElement, DatepickerProps>(
  (_props, ref) => {
    const {
      calenderRenderer,
      controlsRenderer,
      currentMonthButtonsSx,
      nextMonthButtonsSx,
      prevMonthButtonsSx,
      activeDateStyle,
      currentDateSx,
      dateButtonsSx,
      ...props
    } = { ..._defaultDatepickerProps, ..._props };
    const [theme] = useTheme();
    const { value, onChange, ...rest } = props;
    const [date, setDate] = useState(value ? moment(value) : moment());
    const [_date, _setDate] = useState(value ? moment(value) : moment());
    const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
    const [daysInPrevMonth, setDaysInPrevMonth] = useState<number[]>([]);
    const [daysInNextMonth, setDaysInNextMonth] = useState<number[]>([]);
    const themeColor = getColor(theme, props.colorScheme);
    const overrideStyles = safeObj(
      theme?.theme?.[theme.currentTheme]?.Datepicker?.overrideStyles
    );
    useEffect(() => {
      const currentMonth = _date.clone().startOf("month");
      const prevMonth = currentMonth.clone().subtract({ month: 1 });
      const daysInCurrentMonth = Array.from(
        { length: currentMonth.daysInMonth() },
        (_, i) => i + 1
      );
      const daysInPreviousMonth = Array.from(
        { length: currentMonth.day() },
        (_, i) => prevMonth.daysInMonth() - (currentMonth.day() - i - 1)
      );

      const daysInNextMonthArray = Array.from(
        {
          length: 42 - (daysInCurrentMonth.length + daysInPreviousMonth.length),
        },
        (_, i) => i + 1
      );
      setDaysInMonth(daysInCurrentMonth);
      setDaysInPrevMonth(daysInPreviousMonth);
      setDaysInNextMonth(daysInNextMonthArray);
    }, [_date]);

    function handleClick(e: Moment) {
      onChange && onChange(e);
      !e.isSame(date) && setDate(e);
      _setDate(e);
    }

    function handleYearChange(e: number) {
      const _a = date.clone().set({ year: e });
      _setDate(_a);
    }

    const handleMonthChange = (i: number): void => {
      const _a = date.clone().set({ month: i });
      _setDate(_a);
    };
    const handlePrevMonth = () =>
      _setDate((p) => p.clone().subtract({ month: 1 }));

    const handleNextMonth = () => _setDate((p) => p.clone().add({ month: 1 }));

    const handleDateClickPrevMonth = (_dt: number) => {
      handleClick(_date.clone().subtract({ month: 1 }).set({ date: _dt }));
    };

    const handleDateClickCurrentMonth = (_dt: number) =>
      handleClick(_date.clone().set({ date: _dt }));

    const handleDateClickNextMonth = (_dt: number) => {
      handleClick(_date.clone().add({ month: 1 }).set({ date: _dt }));
    };
    return (
      <DatePicker_ ref={ref} {...rest}>
        {calenderRenderer ? (
          calenderRenderer({
            currentMonthDates: daysInMonth,
            nextMonthDates: daysInNextMonth,
            prevMonthDates: daysInPrevMonth,
            handleMonthChange,
            handleYearChange,
            handlePrevMonth,
            handleNextMonth,
            date,
            handleDateClickCurrentMonth,
            handleDateClickNextMonth,
            handleDateClickPrevMonth,
          })
        ) : (
          <>
            {controlsRenderer ? (
              controlsRenderer({
                handleMonthChange,
                handleYearChange,
                handlePrevMonth,
                handleNextMonth,
              })
            ) : (
              <DatePickerButtons_>
                <Select
                  colorScheme={props.colorScheme}
                  value={months[_date.get("month")]}
                  inputRenderer={
                    <RippleBase rippleColor="#4b5563" sx={_inputDaysSx}>
                      <span>{_date.format("MMM")}</span>
                    </RippleBase>
                  }
                  onChange={(_, i) => handleMonthChange(i)}
                  options={months}
                  sx={{ minWidth: 30 }}
                  transitionProps={{ sx: { minWidth: 150, marginTop: 6 } }}
                />
                <Select
                  colorScheme={props.colorScheme}
                  value={_date.get("year")}
                  inputRenderer={
                    <RippleBase rippleColor="#4b5563" sx={{ ..._inputDaysSx }}>
                      <span>{_date.get("year")}</span>
                    </RippleBase>
                  }
                  onChange={handleYearChange}
                  options={[
                    ...[...Array(60)]
                      .map((_, i) => moment().get("year") - (i + 1))
                      .reverse(),
                    moment().get("year"),
                    ...[...Array(60)].map(
                      (_, i) => moment().get("year") + (i + 1)
                    ),
                  ]}
                  sx={{ marginRight: "auto" }}
                  transitionProps={{ sx: { minWidth: 100, marginTop: 6 } }}
                />

                <RippleBase
                  rippleColor="#4b5563"
                  sx={_navButtonSx}
                  onClick={handlePrevMonth}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.95}
                      d="m14 7l-5 5l5 5"
                    ></path>
                  </svg>
                </RippleBase>
                <RippleBase
                  rippleColor="#4b5563"
                  sx={_navButtonSx}
                  onClick={handleNextMonth}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.95}
                      d="m10 17l5-5l-5-5"
                    ></path>
                  </svg>
                </RippleBase>
              </DatePickerButtons_>
            )}

            <Calendar_>
              {days.map((value, i) => {
                return <CalendarDays_ key={"days-" + i}>{value}</CalendarDays_>;
              })}

              {daysInPrevMonth.map((_date, i) => (
                <RippleBase
                  disableRipple
                  onClick={() => handleDateClickPrevMonth(_date)}
                  sx={{
                    ..._dateButtonSx,
                    opacity: "0.5",
                    ...safeCssObj(overrideStyles.dateButtons),
                    ...safeCssObj(overrideStyles.prevMonthButtonsSx),
                    ...safeCssObj(dateButtonsSx),
                    ...safeCssObj(prevMonthButtonsSx),
                  }}
                  key={`prev-${i}`}
                >
                  {_date}
                </RippleBase>
              ))}

              {daysInMonth.map((_dt, i) => (
                <RippleBase
                  key={`curr-${i}`}
                  rippleColor={"#fff"}
                  onClick={() => handleDateClickCurrentMonth(_dt)}
                  sx={{
                    ..._dateButtonSx,
                    ...safeCssObj(overrideStyles.dateButtons),
                    ...safeCssObj(overrideStyles.currentMonthButtonsSx),
                    ...safeCssObj(dateButtonsSx),
                    ...safeCssObj(currentMonthButtonsSx),
                    ...safeCssObj(
                      moment().format("DD/MM/YYYY") ===
                        _date
                          .clone()
                          .set({ date: _dt })
                          .format("DD/MM/YYYY") && {
                        boxShadow: "inset 0 0 0 1px " + themeColor?.main,
                        ...safeCssObj(currentDateSx),
                        ...safeCssObj(overrideStyles.currentDateSx),
                      }
                    ),
                  }}
                  style={
                    {
                      ...safeCssObj(
                        _date.isSame(date.clone().set({ date: _dt })) && {
                          background: getColor(theme, props.colorScheme)?.main,
                          color: "#fff",
                          ...safeCssObj(activeDateStyle),
                          ...safeCssObj(overrideStyles.activeDateStyle),
                        }
                      ),
                    } as CSSProperties
                  }
                >
                  {_dt}
                </RippleBase>
              ))}

              {daysInNextMonth.map((_date, i) => (
                <RippleBase
                  disableRipple
                  onClick={() => handleDateClickNextMonth(_date)}
                  key={`next-${i}`}
                  sx={{
                    ..._dateButtonSx,
                    opacity: "0.5",
                    ...safeCssObj(overrideStyles.dateButtons),
                    ...safeCssObj(overrideStyles.nextMonthButtonsSx),
                    ...safeCssObj(dateButtonsSx),
                    ...safeCssObj(nextMonthButtonsSx),
                  }}
                >
                  {_date}
                </RippleBase>
              ))}
            </Calendar_>
          </>
        )}
      </DatePicker_>
    );
  }
);

export { Datepicker };
