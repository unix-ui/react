import { createUseStyles } from "react-jss";

export const useModalStyled = createUseStyles({
  wrapper: (props) => ({
    display: "flex",
    position: "fixed",
    top: "0",
    left: "0",
    padding: "1.5rem",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#000000",
  }),
});
