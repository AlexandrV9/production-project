import { RouterUtilsContext } from 'app/providers/router';
import { useContext } from 'react';
import { useLocation as useLocationOriginal } from 'react-router-dom';

export const useAppLocation = () => {
  const { locationRef } = useContext(RouterUtilsContext);
  return locationRef.current as ReturnType<typeof useLocationOriginal>;
};
