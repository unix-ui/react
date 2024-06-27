import { TransitionProps } from "../Transition";

export type DrawerProps = TransitionProps & {
  backdropProps?: TransitionProps;
  show: boolean;
  onClose?: () => void;
  position?: "top" | "bottom" | "left" | "right";
};
