import { ButtonHTMLAttributes } from "react";
import { RipplesAttr, SxProps } from "../../types";

export type RippleBaseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disableRipple?: boolean;
  rippleColor?: string;
  rippleRenderer?: (props: RipplesAttr) => JSX.Element;
  sx?: SxProps;
};
