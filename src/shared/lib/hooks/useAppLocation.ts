import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { RouterUtilsContext } from '@/app/providers/router';

export const useAppLocation = () => {
  const { locationRef } = useContext(RouterUtilsContext);
  return locationRef.current as ReturnType<typeof useLocation>;
};
