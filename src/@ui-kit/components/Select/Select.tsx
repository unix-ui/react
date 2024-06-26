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

  const { sx, ...restTransition } = safeObj(transitionProps);

  const ref = useClickAway<HTMLDivElement>(() => setShow(false));

  useImperativeHandle(_ref, () => ref.current);

  const [reverse, setReverse] = useState(false);

  const [show, setShow] = useState(false);
  useEffect(() => {
    // function handleReverse() {
    //   setReverse(
    //     window.innerHeight <
    //       (optionsRef.current?.getBoundingClientRect().bottom || 0)
    //   );
    // }
    // handleReverse();
    // console.log(optionsRef);
    if (show) {
      // window.addEventListener("scroll", () => handleReverse());
      // window.addEventListener("resize", () => handleReverse());
    }

    return () => {
      // window.removeEventListener("scroll", handleReverse);
      // window.removeEventListener("resize", handleReverse);
    };
  }, [ref, show]);

  function handleChange(item: (typeof options)[0], i: number) {
    onChange && onChange(item, i);
    props.disableHideOnChange && setShow(false);
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
      <Transition
        show={show}
        ref={(el) => {
          const activeItem =
            el?.querySelector<HTMLDivElement>("[data-active=true]");

          activeItem && el?.scrollTo({ top: activeItem?.offsetTop });
        }}
        sx={{
          maxHeight: window.innerHeight / 2,
          display: "flex",
          flexDirection: "column",
          gap: unit.rem(0.5),
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          zIndex: "9999",
          background: "#fff",
          padding: unit.spacing(0.5),
          overflow: "auto",
          ...sx,
        }}
        {...restTransition}
        {...get_transition_props(
          {
            enteringStyle: {
              opacity: 0,
              transform: "translateX(-50%) translateY(12px)",
            },
            activeStyle: {
              opacity: 1,
              transform: "translateX(-50%) translateY(0)",
            },
            exitingStyle: {
              opacity: 0,
              transform: "translateX(-50%) translateY(12px)",
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
      </Transition>
    </Select_>
  );
};

export const Select = React.forwardRef(SelectComp) as <T extends unknown[]>(
  props: SelectProps<T, T[0]> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SelectComp>;
