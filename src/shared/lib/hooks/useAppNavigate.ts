import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { RouterUtilsContext } from 'app/providers/router';

export const useAppNavigate = () => {
  const { navigateRef } = useContext(RouterUtilsContext);
  return navigateRef.current as ReturnType<typeof useNavigate>;
};
