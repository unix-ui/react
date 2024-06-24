export const unit = {
  rem: (px: number) => `${px / 16}rem`,
  spacing: (unit: number) => unit * 4,
  remSpacing: (unit: number) => `${unit / 4}rem`,
};
