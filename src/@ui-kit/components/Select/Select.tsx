import { useClickAway } from "@uidotdev/usehooks";
import React, {
  Fragment,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { SelectProps } from "./@types";
import { cn } from "../../../utils/cn";
import { Transition } from "../Transition/Transition";
import { safeObj } from "../../../utils/safeObj";
import { get_transition_props } from "../../../utils/transition";
import { Select_, SelectItem_ } from "./select.styled";
import { unit } from "../../utils/units";
import { _defaultSelectProps } from "./_default";
import Popover from "../Popover/Popover";

function modifiedItemRenderer(
  itemRenderer: Exclude<SelectProps["itemRenderer"], undefined>,
  item: unknown,
  active: boolean
) {
  const _item = itemRenderer(item);
  return React.cloneElement<React.HtmlHTMLAttributes<HTMLElement>>(_item, {
    onClick(e) {
      _item.props.onClick && _item.props.onClick(e);
      e.stopPropagation();
    },
    className: cn(
      _item.props.className,
      active && "venux-ui-select-item-active"
    ),
  });
}

const SelectComp = <T extends unknown[]>(
  _props: SelectProps<T, T[0]>,
  _ref: React.ForwardedRef<HTMLDivElement>
) => {
  const props = { ..._defaultSelectProps, ..._props };

  const {
    inputRenderer,
    value,
    options,
    onChange,
    itemRenderer,
    activeOn,
    itemToShow,
    colorScheme,
    onClick,
    transitionProps,
    ...rest
  } = props;

  const { sx: transitionSx, ...restTransition } = safeObj(transitionProps);

  const ref = useClickAway<HTMLDivElement>(() => setShow(false));

  useImperativeHandle(_ref, () => ref.current);

  const [show, setShow] = useState(false);

  function handleChange(item: (typeof options)[0], i: number) {
    onChange && onChange(item, i);
    !props.disableHideOnChange && setShow(false);
  }

  return (
    <Select_
      ref={ref}
      onClick={(e) => {
        setShow(true);
        onClick && onClick(e);
      }}
      {...rest}
    >
      {inputRenderer}
      <Popover
        elRef={ref}
        show={show}
        position="bottom-center"
        _ref={(el) => {
          const activeItem =
            el?.querySelector<HTMLDivElement>("[data-active=true]");

          activeItem && el?.scrollTo({ top: activeItem?.offsetTop });
          return el;
        }}
        sx={{
          maxHeight: window.innerHeight / 2,
          display: "flex",
          flexDirection: "column",
          gap: unit.rem(0.5),
          width: "auto",
          zIndex: "9999",
          background: "#fff",
          padding: unit.spacing(0.5),
          overflow: "auto",
          ...transitionSx,
        }}
        {...restTransition}
        {...get_transition_props(
          {
            enteringStyle: {
              opacity: 0,
              transform: "translateY(12px)",
            },
            activeStyle: {
              opacity: 1,
              transform: "translateY(0)",
            },
            exitingStyle: {
              opacity: 0,
              transform: "translateY(12px)",
            },
          },
          transitionProps
        )}
      >
        {options?.map((item, i) => {
          return (
            <Fragment key={"venux-ui-select-" + i}>
              {itemRenderer ? (
                modifiedItemRenderer(
                  itemRenderer,
                  item,
                  activeOn ? activeOn(item) : value === item
                )
              ) : (
                <SelectItem_
                  colorScheme={colorScheme}
                  data-active={activeOn ? activeOn(item) : value === item}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChange(item, i);
                  }}
                >
                  <>{itemToShow ? itemToShow(item) : item}</>
                </SelectItem_>
              )}
            </Fragment>
          );
        })}
      </Popover>
    </Select_>
  );
};

export const Select = React.forwardRef(SelectComp) as <T extends unknown[]>(
  props: SelectProps<T, T[0]> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SelectComp>;