"use client";
import React, { PropsWithChildren } from "react";

export type AccordionProps = PropsWithChildren<{ collapseOthers?: boolean }>;

const Accordion = ({ collapseOthers, ...props }: AccordionProps) => {
  return (
    <div
      ref={(ref) => {
        const els = ref?.querySelectorAll(
          "[data-unix-component=accordion-item]"
        );
        if (els) {
          for (let i = 0; i < els.length; i++) {
            const el = els[i];
            el?.querySelector(
              "[data-unix-component=accordion-button]"
            )?.addEventListener("click", () => {
              const _a = el?.querySelector(
                "[data-unix-component=accordion-content]"
              );
              const _b = el?.querySelector(
                "[data-unix-component=accordion-button]"
              );
              if (collapseOthers) {
                for (let x = 0; x < els.length; x++) {
                  const _el = els[x];
                  const _content = _el?.querySelector(
                    "[data-unix-component=accordion-content]"
                  );
                  const _button = _el?.querySelector(
                    "[data-unix-component=accordion-button]"
                  );

                  if (_content !== _a) {
                    _content?.setAttribute("data-opened", "false");
                    _button?.setAttribute("data-opened", "false");
                  }
                }
              }

              _a?.setAttribute(
                "data-opened",
                _a?.getAttribute("data-opened") === "true" ? "false" : "true"
              );
              _b?.setAttribute(
                "data-opened",
                _b?.getAttribute("data-opened") === "true" ? "false" : "true"
              );
            });
          }
        }
      }}
      {...props}
    />
  );
};

export { Accordion };
