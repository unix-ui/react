import React, { useCallback } from "react";
import { TransitionProps } from "../Transition/@types";
import { Transition } from "../Transition/Transition";
import { debounce } from "../../utils";

type VerticalPosition = "top" | "bottom";
type HorizontalPosition = "left" | "right" | "center";

export type PopoverProps = Omit<TransitionProps, "ref"> & {
  spacing?: number;
  elRef: React.MutableRefObject<HTMLDivElement>;
  _ref?: (e: HTMLDivElement | null) => HTMLDivElement | null;
  position?:
    | `${VerticalPosition}-${HorizontalPosition}`
    | `${HorizontalPosition}-${VerticalPosition}`
    | "left-center"
    | "right-center";
};

const Popover = ({ style, elRef, spacing, _ref, ...props }: PopoverProps) => {
  const _handleResize = useCallback(
    (e: HTMLDivElement | null) => {
      const _rec = elRef?.current?.getBoundingClientRect();
      const _rec_e = e?.getBoundingClientRect();

      if (_rec && e && _rec_e && props.show) {
        e.style.left = `${
          props.position === "bottom-left" || props.position === "top-left"
            ? _rec.left
            : props.position === "bottom-right" ||
              props.position === "top-right"
            ? _rec.right - _rec_e.width
            : _rec.left + _rec.width / 2 - _rec_e.width / 2
        }px`;

        if (
          props?.position?.startsWith("left") ||
          props?.position?.startsWith("right")
        ) {
          if (props.position?.endsWith("bottom"))
            e.style.top = `${_rec.bottom}px`;
          if (props.position?.endsWith("top")) e.style.top = `${_rec.top}px`;
          if (props.position?.endsWith("center")) {
            e.style.top = `${_rec.top + _rec.height / 2 - _rec_e.height / 2}px`;
          }
        }

        if (props?.position?.startsWith("left")) {
          const left = _rec.left - _rec_e.width;
          e.style.left = `${
            _rec_e.left <= 0 && !(_rec_e.right >= window.innerWidth)
              ? _rec.right
              : left
          }px`;
        }
        //
        else if (props?.position?.startsWith("right")) {
          const right = _rec.left - _rec_e.width;
          e.style.left = `${right <= 0 ? _rec.left + _rec.width : right}px`;
        } else {
          if (_rec_e.left <= 0 && !(_rec_e.right >= window.innerWidth))
            e.style.left = "0";

          if (_rec_e.right >= window.innerWidth && !(_rec_e.left <= 0))
            e.style.right = "0";

          if (props.position?.startsWith("top-")) {
            const top = _rec.top - _rec_e.height;
            e.style.top = `${
              top < 0 && !(_rec_e.bottom >= window.innerHeight)
                ? _rec.bottom
                : top
            }px`;
          } else {
            const top = _rec.top - _rec_e.height;
            e.style.top = `${
              _rec_e.bottom >= window.innerHeight && !(top < 0)
                ? top
                : _rec.bottom
            }px`;
          }
        }
      }
    },
    [elRef, props.position, props.show]
  );

  const handleResize = debounce(_handleResize, 100);
  return (
    <Transition
      ref={(e) => {
        _ref && (e = _ref(e));
        _handleResize(e);
        window.addEventListener("scroll", () => handleResize(e));
        window.addEventListener("resize", () => handleResize(e));
      }}
      style={{ position: "fixed", zIndex: 9999, ...style }}
      enteringStyle={{
        opacity: 0,
      }}
      activeStyle={{
        opacity: 1,
      }}
      exitingStyle={{
        opacity: 0,
      }}
      {...props}
    />
  );
};

export default Popover;
