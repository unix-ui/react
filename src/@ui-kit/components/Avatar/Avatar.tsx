"use client";
import React, { useState } from "react";
import { Avatar_ } from "./avatar.styled";
import { AvatarProps } from "./@types";
import { AvatarFallback } from "../AvatarFallback/avatar-fallback.styled";
import { safeCssObj } from "../../../utils/safeObj";

const Avatar = (props: AvatarProps) => {
  const { size, name, Wrapper, sx, fallbackElement, ...rest } = props;
  const [show, setShow] = useState(!props.src);
  const _name = name?.split(" ");
  const Comp = Wrapper || <></>;

  return {
    ...Comp,
    props: {
      ...Comp.props,
      children: show ? (
        fallbackElement || (
          <AvatarFallback data-unix-component="avatar">
            {_name ? _name[0][0] + _name[_name.length - 1][0] : "N/A"}
          </AvatarFallback>
        )
      ) : (
        <Avatar_
          onError={() => {
            setShow(true);
          }}
          data-unix-component="avatar"
          sx={{
            ...safeCssObj(!!size && { width: size, height: size }),
            ...safeCssObj(sx),
          }}
          {...rest}
        />
      ),
    },
  };
};

Avatar.displayName = "Avatar";

export { Avatar };
