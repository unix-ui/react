import React, { ComponentProps } from "react";
import { Avatar_ } from "./avatar.styled";

export type AvatarProps = ComponentProps<typeof Avatar_> & {
  src?: string;
  name?: string;
  size?: number;
  Wrapper?: JSX.Element;
  fallbackElement?: JSX.Element;
};
