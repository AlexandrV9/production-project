import { RouterUtilsContext } from 'app/providers/router';
import { useContext } from 'react';
import { useNavigate as useNavigateOriginal } from 'react-router-dom';

export const useNavigate = () => {
  const { navigateRef } = useContext(RouterUtilsContext);
  return navigateRef.current as ReturnType<typeof useNavigateOriginal>;
};
