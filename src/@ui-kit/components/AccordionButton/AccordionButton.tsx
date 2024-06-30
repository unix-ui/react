import { AccordionButton_ } from "./accordion-button.styled";
import { AccordionButtonProps } from "./@types";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const AccordionButton = forwardRef<HTMLButtonElement, AccordionButtonProps>(
  ({ children, hideArrow, ...props }, _ref) => {
    const [show, setShow] = useState(false);

    const ref = useRef<HTMLButtonElement>(null);
    useImperativeHandle(_ref, () => ref.current!);
    useEffect(() => {
      if (ref.current) {
        const observer = new MutationObserver((el) => {
          if (el[0]?.attributeName === "data-opened" && ref.current) {
            setShow(
              ref.current?.getAttribute("data-opened") === "true" ? true : false
            );
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
      <AccordionButton_
        ref={ref}
        data-unix-component="accordion-button"
        data-opened={"false"}
        {...props}
      >
        {typeof children === "function" ? children({ open: show }) : children}
        {!hideArrow && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              rotate: show ? "180deg" : "0deg",
              transition: "all 200ms",
            }}
            width="1em"
            height="1em"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"
            ></path>
          </svg>
        )}
      </AccordionButton_>
    );
  }
);

export { AccordionButton };
