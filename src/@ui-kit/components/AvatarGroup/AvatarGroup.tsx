import React, { ComponentProps } from "react";
import { AvatarGroup_ } from "./avatar-group.styled";
import { toArray } from "../../../utils/toArray";
import { Center } from "../Layouts";

export type AvatarGroupProps = ComponentProps<typeof AvatarGroup_>;

const AvatarGroup = (props: AvatarGroupProps) => {
  const { children, ...rest } = props;
  console.log(children);
  return (
    <AvatarGroup_
      {...rest}
      children={[
        ...toArray(children),
        <Center
          sx={{
            position: "relative",
            width: 60,
            height: 60,
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "50%",
            marginRight: "-1em",
            background: "red",
          }}
          as={"span"}
        >
          +24
        </Center>,
      ].reverse()}
    />
  );
};

export { AvatarGroup };
