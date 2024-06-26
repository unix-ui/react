export const unit = {
  rem: (px: number) => `${px / 16}rem`,
  spacing: (...unit: number[]) => `${unit.join("rem ")}rem`,
  remSpacing: (unit: number) => `${unit / 4}rem`,
};
