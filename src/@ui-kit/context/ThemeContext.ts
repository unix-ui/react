import React from "react";
import { ThemeProps } from "../types/@types";

export const ThemeContext = React.createContext<
  React.Dispatch<React.SetStateAction<Partial<ThemeProps>>>
>(() => {});
