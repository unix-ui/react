import { CSSObject } from "@emotion/react";
import { SxProps, ThemeProps } from "./types";

declare module "react" {
  interface Attributes {
    css?: CSSObject;
    sx?: SxProps;
  }
}
