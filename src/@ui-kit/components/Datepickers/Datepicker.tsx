import { CSSProperties, forwardRef, useEffect, useState } from "react";
import moment, { Moment } from "moment";
import RippleBase from "../RippleBase/RippleBase";
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
import { SxProps } from "../../types";
import { safeCssObj } from "../../../utils/safeObj";
import { getColor } from "../../../utils/get";
import { DatepickerProps } from "./@types";
import { useTheme } from "../../hooks";

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
  ({ calenderRender, ...props }, ref) => {
    const [theme] = useTheme();
    const { value, onChange, ...rest } = props;
    const [date, setDate] = useState(value ? moment(value) : moment());
    const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
    const [daysInPrevMonth, setDaysInPrevMonth] = useState<number[]>([]);
    const [daysInNextMonth, setDaysInNextMonth] = useState<number[]>([]);
    const themeColor = getColor(theme, props.colorScheme);

    useEffect(() => {
      const currentMonth = date.clone().startOf("month");
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
    }, [date]);

    function handleClick(e: Moment) {
      onChange && onChange(e);
      !e.isSame(date) && setDate(e);
    }

    function handleYear(e: number) {
      const _a = date.clone().set({ year: e });
      !date.isSame(_a) && setDate(_a);
    }

    const handleMonth = (i: number): void => {
      console.log(i);
      const _a = date.clone().set({ month: i });
      !date.isSame(_a) && setDate(_a);
    };
    const handlePrevMonth = () =>
      setDate((p) => p.clone().subtract({ month: 1 }));

    const handleNextMonth = () => setDate((p) => p.clone().add({ month: 1 }));

    const handleDateClickPrevMonth = (_date: number) => {
      handleClick(date.clone().subtract({ month: 1 }).set({ date: _date }));
    };

    const handleDateClickCurrentMonth = (_date: number) =>
      handleClick(date.clone().set({ date: _date }));

    const handleDateClickNextMonth = (_date: number) => {
      handleClick(date.clone().add({ month: 1 }).set({ date: _date }));
    };
    return (
      <DatePicker_ ref={ref} {...rest}>
        {calenderRender ? (
          calenderRender({
            currentMonthDates: daysInMonth,
            nextMonthDates: daysInNextMonth,
            prevMonthDates: daysInPrevMonth,
            handleMonthChange: handleMonth,
            handleYearChange: handleYear,
            handlePrevMonth,
            handleNextMonth,
            date,
            handleDateClickCurrentMonth,
            handleDateClickNextMonth,
            handleDateClickPrevMonth,
          })
        ) : (
          <>
            <DatePickerButtons_>
              <Select
                colorScheme={props.colorScheme}
                value={months[date.get("month")]}
                inputRenderer={
                  <RippleBase rippleColor="#4b5563" sx={_inputDaysSx}>
                    <span>{date.format("MMM")}</span>
                  </RippleBase>
                }
                onChange={(_, i) => handleMonth(i)}
                options={months}
                sx={{ minWidth: 30 }}
                transitionProps={{ sx: { minWidth: 150, marginTop: 6 } }}
              />
              <Select
                colorScheme={props.colorScheme}
                value={date.get("year")}
                inputRenderer={
                  <RippleBase rippleColor="#4b5563" sx={{ ..._inputDaysSx }}>
                    <span>{date.get("year")}</span>
                  </RippleBase>
                }
                onChange={handleYear}
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

            <Calendar_>
              {days.map((value, i) => {
                return <CalendarDays_ key={"days-" + i}>{value}</CalendarDays_>;
              })}

              {daysInPrevMonth.map((_date, i) => (
                <RippleBase
                  disableRipple
                  onClick={() => handleDateClickPrevMonth(_date)}
                  sx={{ ..._dateButtonSx, opacity: "0.5" }}
                  key={`prev-${i}`}
                >
                  {_date}
                </RippleBase>
              ))}

              {daysInMonth.map((_date, i) => (
                <RippleBase
                  key={`curr-${i}`}
                  rippleColor={"#fff"}
                  onClick={() => handleDateClickCurrentMonth(_date)}
                  sx={{
                    ..._dateButtonSx,
                    ...safeCssObj(
                      moment().isSame(moment().set({ date: _date })) && {
                        boxShadow: "inset 0 0 0 1px " + themeColor?.main,
                      }
                    ),
                  }}
                  style={
                    {
                      ...safeCssObj(
                        date.isSame(date.clone().set({ date: _date })) && {
                          background: getColor(theme, props.colorScheme)?.main,
                          color: "#fff",
                        }
                      ),
                    } as CSSProperties
                  }
                >
                  {_date}
                </RippleBase>
              ))}

              {daysInNextMonth.map((_date, i) => (
                <RippleBase
                  disableRipple
                  onClick={() => handleDateClickNextMonth(_date)}
                  key={`next-${i}`}
                  sx={{ ..._dateButtonSx, opacity: "0.5" }}
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
