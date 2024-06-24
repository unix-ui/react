import { ThemeProps } from "../types/@types";
import React, { useContext } from "react";
import { useTheme as useJssTheme } from "@emotion/react";
import { ThemeContext } from "../context/ThemeContext";

const useTheme = (): [
  ThemeProps,
  React.Dispatch<React.SetStateAction<Partial<ThemeProps>>>
] => [useJssTheme() as ThemeProps, useContext(ThemeContext)];

export { useTheme };
