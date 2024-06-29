export const unit = {
  rem: (px: number) => `${px / 16}rem`,
  spacing: (...unit: number[]) => `${unit.map((p) => p / 4).join("rem ")}rem`,
  remSpacing: (unit: number) => `${unit / 4}rem`,
};
