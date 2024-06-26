export function debounce<T extends Function>(func: T, timeout = 100): T {
  let timer: number;
  const _fn = (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
  return _fn as unknown as T;
}
