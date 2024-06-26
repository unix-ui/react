import { _defaultColors } from "../@ui-kit/provider";
import { ColorShades, ThemeProps } from "../@ui-kit/types";

export const getColor = (theme: any, scheme?: string): ColorShades =>
  theme?.theme?.[theme.currentTheme]?.colors?.[scheme || ""] ||
  _defaultColors?.[scheme || ""];
