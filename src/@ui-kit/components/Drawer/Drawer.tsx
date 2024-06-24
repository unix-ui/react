import React, { HTMLAttributes } from "react";
import { TransitionProps } from "../Transition/@types";
import { Transition } from "../Transition/Transition";
import { get_transition_props } from "../../../utils/transition";
import { cn } from "../../../utils/cn";
import { safeObj } from "../../../utils/safeObj";
import { useDrawerStyled } from "./drawer.styled";

export type DrawerProps = TransitionProps & {
  show: boolean;
  onClose?: () => void;
  backdropProps?: TransitionProps;
};

const Drawer = (props: DrawerProps) => {
  const { onClose, className, backdropProps, ...rest } = props;
  const {
    onClick,
    className: backdropClassName,
    ...backdropRest
  } = safeObj(backdropProps);
  const styled = useDrawerStyled();
  return (
    <>
      <Transition
        onClick={(e) => {
          onClose && onClose();
          onClick && onClick(e);
        }}
        show={props.show}
        className={cn(styled.backdrop, backdropClassName)}
        {...get_transition_props(
          {
            enteringStyle: {
              opacity: 0,
            },
            activeStyle: {
              opacity: 1,
            },
            exitingStyle: {
              opacity: 0,
            },
          },
          backdropProps
        )}
        {...backdropRest}
      />
      <Transition
        // className={cn(styled.drawer, className)}
        sx={{
          overflowY: "auto",
          position: "fixed",
          top: "0",
          height: "100vh",
          zIndex: 10000,
          width: "fit-content",
          transition: "all 300ms ease-in-out",
        }}
        enteringStyle={{
          right: "-100%",
          duration: 300,
        }}
        activeStyle={{
          right: 0,
          duration: 300,
        }}
        exitingStyle={{
          right: "-100%",
          duration: 300,
        }}
        // {...get_transition_props(
        //   {
        //     enteringStyle: {
        //       right: "-100%",
        //     },
        //     activeStyle: {
        //       right: 0,
        //       duration: 300,
        //     },
        //     exitingStyle: {
        //       right: "-100%",
        //     },
        //   },
        //   backdropProps
        // )}
        {...rest}
      />
    </>
  );
};

export default Drawer;
