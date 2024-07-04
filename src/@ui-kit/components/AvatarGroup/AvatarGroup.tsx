"use client";
import React from "react";
import { AvatarGroup_ } from "./avatar-group.styled";
import { toArray } from "../../../utils/toArray";
import { AvatarGroupProps } from "./@types";
import { AvatarFallback } from "../AvatarFallback/avatar-fallback.styled";

const AvatarGroup = (props: AvatarGroupProps) => {
  const { children, ...rest } = props;

  return (
    <AvatarGroup_
      {...rest}
      children={[
        ...toArray(children),
        <AvatarFallback sx={{ width: rest.size, height: rest.size }}>
          +24
        </AvatarFallback>,
      ].reverse()}
    />
  );
};

export { AvatarGroup };
