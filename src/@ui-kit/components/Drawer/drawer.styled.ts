import { createUseStyles } from "react-jss";
import { alpha } from "../../utils/alpha";

export const useDrawerStyled = createUseStyles({
  backdrop: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    backgroundColor: alpha("#000000", 0.3),
    zIndex: 9999,
  },
  drawer: {
    overflowY: "auto",
    position: "fixed",
    top: "0",
    height: "100vh",
    zIndex: 10000,
    width: "fit-content",
  },
});
