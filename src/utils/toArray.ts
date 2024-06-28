export const toArray = <T>(p: T | T[]): T[] => (Array.isArray(p) ? p : [p]);
