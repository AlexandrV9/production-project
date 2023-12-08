import { useCallback, useEffect, useRef } from 'react';

export type UseThrottle = <T>(
  callback: (...args: T[]) => void,
  delay: number,
) => (...args: T[]) => void;

export const useThrottle: UseThrottle = (callback, delay) => {
  const throttleRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const throttledCallback = useCallback(
    (...args) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;

        timeoutRef.current = setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [callback, delay],
  );

  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    },
    [],
  );

  return throttledCallback;
};
