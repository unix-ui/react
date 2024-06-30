import { ComponentProps } from "react";
import { AccordionButton_ } from "./accordion-button.styled";

export type AccordionButtonProps = Omit<
  ComponentProps<typeof AccordionButton_>,
  "children"
> & {
  children?:
    | React.ReactNode
    | (({ open }: { open: boolean }) => React.ReactNode);
  hideArrow?: boolean;
};
