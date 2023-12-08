import { useLayoutEffect } from 'react';

export function useInitialLayoutEffect(callback: () => void) {
  useLayoutEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      callback();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
