"use client";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Transition } from "../Transition";
import { AccordionContentProps } from "./@types";

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  (props, _ref) => {
    const [show, setShow] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useImperativeHandle(_ref, () => ref.current!);
    useEffect(() => {
      if (ref.current) {
        const observer = new MutationObserver((el) => {
          if (el[0]?.attributeName === "data-opened" && ref.current) {
            setShow(
              ref.current?.getAttribute("data-opened") === "true" ? true : false
            );
            ref.current.style.gridTemplateRows =
              ref.current?.getAttribute("data-opened") === "true"
                ? "1fr"
                : "0fr";
          }
        });
        observer.disconnect();
        observer.observe(ref.current as Node, {
          attributes: true,
          attributeFilter: ["data-opened"],
        });
      }
      return () => {};
    }, []);
    return (
      <div
        data-unix-component="accordion-content"
        data-opened="false"
        style={{
          gridTemplateRows: "0fr",
          transition: `all ${props.duration || 300}ms`,
          display: "grid",
        }}
        ref={ref}
      >
        <Transition
          show={show}
          sx={{ overflow: "hidden" }}
          exitingStyle={{ duration: props.duration || 300 }}
        >
          {props.children}
        </Transition>
      </div>
    );
  }
);

export { AccordionContent };
