import { forwardRef, HTMLAttributes, useEffect, useState } from "react";
import moment, { Moment } from "moment";
import RippleBase from "../RippleBase/RippleBase";
import { cn } from "../../../utils/cn";
import { Select } from "../Select/Select";
import { useDateButtonStyled, useDatepickerStyled } from "./datepicker.styled";
import { RippleBaseProps } from "../RippleBase/@types";

export type DatepickerProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "value" | "onChange"
> & {
  value?: Moment;
  onChange?: (e: Moment) => void;
};

const Datepicker = forwardRef<HTMLDivElement, DatepickerProps>((props, ref) => {
  const { value, onChange, ...rest } = props;
  const styled = useDatepickerStyled();
  const [date, setDate] = useState(value ? moment(value) : moment());
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
  const [daysInPrevMonth, setDaysInPrevMonth] = useState<number[]>([]);
  const [daysInNextMonth, setDaysInNextMonth] = useState<number[]>([]);

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
    // 42 is the total length of date in 1 slide of datepicker
    const daysInNextMonthArray = Array.from(
      { length: 42 - (daysInCurrentMonth.length + daysInPreviousMonth.length) },
      (_, i) => i + 1
    );
    setDaysInMonth(daysInCurrentMonth);
    setDaysInPrevMonth(daysInPreviousMonth);
    setDaysInNextMonth(daysInNextMonthArray);
  }, [date]);

  function handleClick(e: Moment) {
    onChange && onChange(e);
    setDate(e);
  }

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

  return (
    <div className={styled.wrapper} ref={ref} {...rest}>
      <div className={styled.button_wrapper}>
        <Select
          value={months[date.get("month")]}
          inputRenderer={
            <RippleBase
              rippleColor="#4b5563"
              sx={{
                paddingTop: "0.125rem",
                paddingBottom: "0.125rem",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                borderRadius: "0.25rem",
                fontSize: "13px",
              }}
            >
              <span>{date.format("MMM")}</span>
            </RippleBase>
          }
          onChange={(_, i) => setDate((p) => p.clone().set({ month: i }))}
          options={months}
          sx={{ minWidth: 30 }}
          transitionProps={{ sx: { minWidth: 150, marginTop: 6 } }}
        />
        <Select
          value={date.get("year")}
          inputRenderer={
            <RippleBase
              rippleColor="#4b5563"
              sx={{
                paddingTop: "0.125rem",
                paddingBottom: "0.125rem",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                borderRadius: "0.25rem",
                fontSize: "13px",
              }}
            >
              <span>{date.get("year")}</span>
            </RippleBase>
          }
          onChange={(e) => setDate((p) => p.clone().set({ year: e }))}
          options={[...Array(140)].map((_, i) => 1940 + i)}
          sx={{ marginRight: "auto" }}
          transitionProps={{ sx: { minWidth: 100, marginTop: 6 } }}
        />

        <RippleBase
          rippleColor="#4b5563"
          className={cn(styled.ripple_button)}
          onClick={() => {
            setDate((p) => p.clone().subtract({ month: 1 }));
          }}
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
          className={cn(styled.ripple_button)}
          onClick={() => setDate((p) => p.clone().add({ month: 1 }))}
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
      </div>

      <div className={styled.calendar}>
        {days.map((value, i) => {
          return (
            <p key={"days-" + i} className="text-[12px] text-gray-500">
              {value}
            </p>
          );
        })}

        {daysInPrevMonth.map((_date, i) => (
          <DateButton
            disableRipple
            onClick={() => {
              handleClick(
                date.clone().subtract({ month: 1 }).set({ date: _date })
              );
              setDate((p) => p.clone().subtract({ month: 1 }));
            }}
            key={`prev-${i}`}
          >
            {_date}
          </DateButton>
        ))}

        {daysInMonth.map((_date, i) => (
          <DateButton
            key={`curr-${i}`}
            onClick={() => handleClick(date.clone().set({ date: _date }))}
            isCurrentMonth
            className={cn(
              moment().isSame(date.clone().set({ date: _date }), "date") &&
                "ring-1 ring-indigo-600 text-indigo-600 font-semibold"
            )}
          >
            {_date}
          </DateButton>
        ))}

        {daysInNextMonth.map((_date, i) => (
          <DateButton
            disableRipple
            onClick={() => {
              handleClick(date.clone().add({ month: 1 }).set({ date: _date }));
              setDate((p) => p.clone().add({ month: 1 }));
            }}
            key={`next-${i}`}
          >
            {_date}
          </DateButton>
        ))}
      </div>
    </div>
  );
});

function DateButton({
  isCurrentMonth,
  onClick,
  className,
  ...props
}: RippleBaseProps & {
  isCurrentMonth?: boolean;
  isToday?: boolean;
  onClick: () => void;
}) {
  const styled = useDateButtonStyled({ isCurrentMonth });
  return (
    <RippleBase
      onClick={onClick}
      rippleColor="#3D32EF"
      className={cn(styled.ripple_button, className)}
      {...props}
    />
  );
}

export default Datepicker;
