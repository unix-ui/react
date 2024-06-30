import React from "react";
import { Transition } from "../Transition/Transition";
import { safeCssObj, safeObj } from "../../../utils/safeObj";
import { alpha } from "../../utils";
import { DrawerProps } from "./@types";

const Drawer = ({ position = "right", ...props }: DrawerProps) => {
  const { onClose, backdropProps, sx, ...rest } = props;
  const { onClick, sx: backDropSx, ...backdropRest } = safeObj(backdropProps);
  const translate = `${
    position === "top"
      ? "0 -100%"
      : position === "bottom"
      ? "0 100%"
      : position === "left"
      ? "-100% 0"
      : "100% 0"
  }`;
  return (
    <>
      <Transition
        onClick={(e) => {
          onClose && onClose();
          onClick && onClick(e);
        }}
        show={props.show}
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          backgroundColor: alpha("#000000", 0.3),
          zIndex: 9999,
          ...safeObj(backDropSx),
        }}
        enteringStyle={{
          opacity: 0,
        }}
        activeStyle={{
          opacity: 1,
        }}
        exitingStyle={{
          opacity: 0,
        }}
        {...backdropRest}
      />
      <Transition
        sx={{
          overflowY: "auto",
          position: "fixed",
          [position]: "0",
          zIndex: 10000,
          width: "fit-content",
          ...safeObj(sx),
          ...safeCssObj(position === "bottom" ? { bottom: 0 } : { top: 0 }),
        }}
        enteringStyle={{
          translate,
          duration: 400,
          animationType: "cubic-bezier(0.64, 0.37, 0.01, 0.68)",
        }}
        activeStyle={{
          translate: "0 0",
        }}
        exitingStyle={{
          translate,
          animationType: "ease-out",
          duration: 200,
        }}
        {...rest}
      />
    </>
  );
};

export { Drawer };
