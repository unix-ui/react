import { useClickAway } from "@uidotdev/usehooks";
import React, {
  Fragment,
  HtmlHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { SelectProps } from "./@types";
import { cn } from "../../../utils/cn";
import { Transition } from "../Transition/Transition";
import { useSelectStyled } from "./select.styled";
import SelectItem from "./SelectItem";
import { useTheme } from "../../hooks";
import { safeCssObj, safeObj } from "../../../utils/safeObj";
import { get_transition_props } from "../../../utils/transition";

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
  props: SelectProps<T, T[0]>,
  _ref: React.ForwardedRef<HTMLDivElement>
) => {
  const {
    inputRenderer,
    value,
    options,
    onChange,
    itemRenderer,
    activeOn,
    itemToShow,
    className,
    onClick,
    transitionProps,
    ...rest
  } = props;

  const { className: transtitionClassName } = safeObj(transitionProps);

  const optionsRef = useRef<HTMLDivElement>(null);
  const ref = useClickAway<HTMLDivElement>(() => setShow(false));

  useImperativeHandle(_ref, () => ref.current);

  const [reverse, setReverse] = useState(false);

  const styled = useSelectStyled({ reverse, sx: props.sx });

  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleReverse() {
      setReverse(
        window.innerHeight <
          (optionsRef.current?.getBoundingClientRect().bottom || 0)
      );
    }
    handleReverse();
    if (show) {
      window.addEventListener("scroll", () => handleReverse());
      window.addEventListener("resize", () => handleReverse());
      const activeItem =
        optionsRef.current?.querySelector<HTMLDivElement>("[data-active=true]");

      optionsRef.current?.scrollTo({ top: activeItem?.offsetTop });
    }

    return () => {
      window.removeEventListener("scroll", handleReverse);
      window.removeEventListener("resize", handleReverse);
    };
  }, [optionsRef, show]);

  function handleChange(item: (typeof options)[0], i: number) {
    onChange && onChange(item, i);
    setShow(false);
  }

  return (
    <div
      ref={ref}
      className={cn(styled.wrapper, className)}
      onClick={(e) => {
        setShow(true);
        onClick && onClick(e);
      }}
      {...rest}
    >
      {inputRenderer}
      <Transition
        show={show}
        ref={optionsRef}
        className={cn(styled.transition, transtitionClassName)}
        style={{
          maxHeight: window.innerHeight / 2,
        }}
        {...transitionProps}
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
                <SelectItem
                  data-active={activeOn ? activeOn(item) : value === item}
                  active={activeOn ? activeOn(item) : value === item}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChange(item, i);
                  }}
                >
                  <>{itemToShow ? itemToShow(item) : item}</>
                </SelectItem>
              )}
            </Fragment>
          );
        })}
      </Transition>
    </div>
  );
};

export const Select = React.forwardRef(SelectComp) as <T extends unknown[]>(
  props: SelectProps<T, T[0]> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SelectComp>;
