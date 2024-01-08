import { useCallback, useEffect, useRef } from 'react';

export type UseDebaunce = <T>(
  callback: (...args: T[]) => void,
  delay: number,
) => (...args: T[]) => void;

export const useDebaunce: UseDebaunce = (callback, delay) => {
  const timerRef = useRef<NodeJS.Timeout>();

  const debauncedCallback = useCallback(
    (...args: any[]) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  useEffect(
    () => () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    },
    [],
  );

  return debauncedCallback;
};
