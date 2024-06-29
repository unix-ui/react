// import { safeCssObj, safeCssObjOn } from "../../../utils/safeObj";
// import { createUseStyles } from "react-jss";
// import { IconButtonProps } from "./@types";

// export const useIconButtonStyled = createUseStyles<
//   "button" | "button_wrapper",
//   IconButtonProps
// >({
//   button: (props) => ({
//     ...safeCssObjOn(
//       props.noDefaultStyling,
//       {},
//       {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         transitionProperty:
//           "color, background-color, border-color, text-decoration-color, fill, stroke",
//         transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
//         transitionDuration: "300ms",
//         borderRadius: "0.375rem",
//         color: "#ffffff",
//         background: "#3D32EF",
//         userSelect: "none",
//         ":hover": { backgroundColor: "#2a22ae" },
//       }
//     ),
//     ...safeCssObj(props.sx),
//     ...safeCssObj(
//       props.ripple && {
//         overflow: "hidden",
//         position: "relative",
//         ...safeCssObj(props.disabledSx),
//       }
//     ),
//     ...safeCssObj(
//       props.isLoading && {
//         cursor: "not-allowed",
//         overflow: "hidden",
//         position: "relative",
//         ...safeCssObj(props.loadingSx),
//       }
//     ),
//     ...safeCssObj(props.disabled && { pointerEvents: "none", opacity: 0.5 }),
//   }),
//   button_wrapper: (props) => ({
//     display: "flex",
//     position: "absolute",
//     top: "0",
//     left: "0",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%",
//     height: "100%",
//     color: "#374151",
//     backgroundColor: "#D1D5DB",
//   }),
// });
