import { _defaultColors } from "../@ui-kit/provider";
import { ThemeProps } from "../@ui-kit/types";
import { ColorShades } from "../@ui-kit/types/@colors";

export const getColor = (theme: any, scheme?: string): ColorShades =>
  theme?.theme?.[theme.currentTheme]?.colors?.[scheme || ""] ||
  _defaultColors?.[scheme || ""];
