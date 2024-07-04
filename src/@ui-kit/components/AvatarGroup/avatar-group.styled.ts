import styled from "@emotion/styled";
import { safeCssObj } from "../../../utils/safeObj";
import { T_WITH_THEME } from "../../../@types/@types";
import { SxProps } from "../../types";

type AvatarProps = {
  size?: number;
  outlineColor?: string;
  spacing?: number;
  spacingOnHover?: number;
  expandOnHover?: boolean;
  avatarSx?: SxProps;
};

export const AvatarGroup_ = styled.div<T_WITH_THEME<AvatarProps>>(
  ({
    size = 50,
    spacing = -size / 5,
    spacingOnHover = -size / 9,
    ...props
  }) => {
    return {
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "center",
      alignItems: "center",
      width: "fit-content",
      "[data-unix-component=avatar]": {
        width: size,
        height: size,
        marginRight: spacing,
        boxShadow: `0 0 0 2px ${props.outlineColor || "#fff"}`,
        transition: "margin-right 150ms",
        position: "relative",
        objectFit: "cover",
        objectPosition: "center",
        borderRadius: "50%",
        ...safeCssObj(props.avatarSx),
      },
      ...safeCssObj(
        props.expandOnHover && {
          "&:hover": {
            "[data-unix-component=avatar]": {
              marginRight: spacingOnHover,
            },
          },
        }
      ),
      ...safeCssObj(props.sx),
    };
  }
);
