import React, { HTMLAttributes } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { TransitionProps } from "../Transition/@types";
import { Transition } from "../Transition/Transition";
import { safeObj } from "../../../utils/safeObj";

export type ModalProps = {
  show: boolean;
  onClose?: () => void;
  transitionProps?: TransitionProps;
  children?: React.ReactNode;
  transitionDuration?: number;
};

const Modal = (props: ModalProps) => {
  const { onClose, transitionProps, transitionDuration, ...rest } = props;
  const { sx, enteringStyle, exitingStyle, activeStyle } =
    safeObj(transitionProps);

  const ref = useClickAway<HTMLDivElement>(() => onClose && onClose());
  return (
    <Transition
      show={props.show}
      enteringStyle={{
        opacity: 0,
        duration: transitionDuration,
        ...safeObj(enteringStyle),
      }}
      activeStyle={{
        opacity: 1,
        duration: transitionDuration,
        ...safeObj(activeStyle),
      }}
      exitingStyle={{
        opacity: 0,
        duration: transitionDuration,
        ...safeObj(exitingStyle),
      }}
      sx={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        ...safeObj(sx),
      }}
    >
      <div ref={ref} {...rest} />
    </Transition>
  );
};

export { Modal };
