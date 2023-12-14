import { RouterUtilsContext } from 'app/providers/router';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAppNavigate = () => {
  const { navigateRef } = useContext(RouterUtilsContext);
  return navigateRef.current as ReturnType<typeof useNavigate>;
};
