import React, { ButtonHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import { useSelectItemStyled } from "./select-item.styled";
import { SxProps } from "../../types";

const SelectItem = <T extends unknown[]>({
  active,
  activeStyles,
  className,
  inActiveStyles,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  activeStyles?: SxProps;
  inActiveStyles?: SxProps;
}) => {
  const styled = useSelectItemStyled({ active, activeStyles, inActiveStyles });
  return <button className={cn(styled.item, className)} {...rest} />;
};

export default SelectItem;
