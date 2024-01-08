
import { createContext,FC, ReactNode, useMemo, useRef } from 'react';
import {
  useLocation as useLocationOriginal,
  useNavigate as useNavigateOriginal,
} from 'react-router-dom';

interface RouterUtilsProps {
  children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RouterUtilsContext = createContext<any>(null);

export const RouterUtils: FC<RouterUtilsProps> = ({ children }) => {
  const navigate = useNavigateOriginal();
  const location = useLocationOriginal();

  // useRef retains object reference between re-renders
  const navigateRef =
    useRef<ReturnType<typeof useNavigateOriginal>>(navigate);
  const locationRef =
    useRef<ReturnType<typeof useLocationOriginal>>(location);

  navigateRef.current = navigate;
  locationRef.current = location;

  // contextValue never changes between re-renders since refs don't change between re-renders
  const contextValue = useMemo(
    () => ({ navigateRef, locationRef }),
    [locationRef, navigateRef],
  );

  // since contextValue never changes between re-renders, components/hooks using this context
  // won't re-render when router context updates
  return (
    <RouterUtilsContext.Provider value={contextValue}>
      {children}
    </RouterUtilsContext.Provider>
  );
};



export default RouterUtils;
