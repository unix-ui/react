import React from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { TransitionProps } from "../Transition/@types";
import { Transition } from "../Transition/Transition";
import { safeObj } from "../../../utils/safeObj";
import { alpha } from "../../utils";

export type ModalProps = TransitionProps & {
  backdropProps?: TransitionProps;
  show: boolean;
  onClose?: () => void;
};

const Modal = (props: ModalProps) => {
  const { onClose, backdropProps, sx, ...rest } = props;
  const { onClick, sx: backDropSx, ...backdropRest } = safeObj(backdropProps);

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
      />{" "}
      <Transition
        sx={{
          overflowY: "auto",
          position: "fixed",
          zIndex: 10000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          left: "50%",
          top: "50%",
          translate: "-50% -50%",
          ...safeObj(sx),
        }}
        enteringStyle={{
          opacity: 0,
          duration: 300,
          animationType: "cubic-bezier(0.64, 0.37, 0.01, 0.68)",
        }}
        activeStyle={{
          opacity: 1,
        }}
        exitingStyle={{
          animationType: "linear",
          opacity: 0,
          duration: 150,
        }}
        {...rest}
      />
    </>
  );
};

export { Modal };
