import { colors } from "../@ui-kit/colors";
import { ColorShades } from "../@ui-kit/types/@colors";

export const getColor = (theme: any, scheme?: string): ColorShades =>
  theme?.theme?.[theme.currentTheme]?.colors?.[scheme || ""] ||
  colors?.[scheme || ""];
