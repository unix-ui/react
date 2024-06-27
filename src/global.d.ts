import { CSSObject } from "@emotion/react";
import { SxProps } from "./@ui-kit/types";

declare module "react" {
  interface Attributes {
    css?: CSSObject;
    sx?: SxProps;
  }
}
