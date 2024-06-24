export function cn(...classes: any[]) {
  let str = "";
  for (let i = 0; i < classes.length; i++) {
    const el = classes[i];
    if (el && typeof el === "string") str += " " + el;
  }
  return str;
}
