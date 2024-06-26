import React, {
  createRef,
  CSSProperties,
  Fragment,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { TransitionProps } from "../Transition/@types";
import { Transition } from "../Transition/Transition";

const Popover = (
  props: TransitionProps & { children?: ReactElement<HTMLElement> }
) => {
  const ref = useRef<HTMLElement>(null);

  if (props.children?.type === Fragment) {
    console.warn("Fragments are not supported in Popover component.");
    return <></>;
  }
  const childWithRef = React.cloneElement(props.children as any, {
    ref,
  });

  return (
    <>
      {childWithRef}
      <Transition
        show
        ref={(e) => {
          function handleReverse() {
            const _rec = ref?.current?.getBoundingClientRect();
            const _rec_e = e?.getBoundingClientRect();
            console.log(_rec, _rec_e);

            if (_rec && e && _rec_e) {
              // if (_rec?.left <= 0) setLeft(0);
              // if (_rec?.right >= window.innerWidth) setRight(0);
              // setTop(_rec.bottom);
              // setLeft(_rec.left / 2 + _rec.width);
              console.log("object");
              if (_rec_e.left <= 0) e.style.left = "0";
              else if (_rec_e.right >= window.innerWidth) e.style.right = "0";
              else
                e.style.left = `${
                  _rec.left + _rec.width / 2 - _rec_e.width / 2
                }px`;

              const top = _rec.top - _rec_e.height;
              e.style.top = `${top < 0 ? _rec.bottom : top}px`;
            }
            // setReverse(
            //   window.innerHeight <
            //     (optionsRef.current?.getBoundingClientRect().bottom || 0)
            // );
          }
          handleReverse();
          window.addEventListener("scroll", () => handleReverse());
          window.addEventListener("resize", () => handleReverse());
        }}
        sx={{
          minWidth: 500,
          height: 400,
          position: "fixed",
          background: "blue",
        }}
      >
        asdasd
      </Transition>
    </>
  );
};

export default Popover;
