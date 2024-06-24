import { CSSObject } from "@emotion/react";
import { SxProps } from "./types";

interface MyTheme {}

declare module "react" {
  interface Attributes {
    css?: CSSObject<MyTheme>;
    sx?: SxProps;
  }
}
