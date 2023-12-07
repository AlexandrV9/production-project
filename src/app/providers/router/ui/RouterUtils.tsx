import React from 'react';
import {
  useNavigate as useNavigateOriginal,
  useLocation as useLocationOriginal,
} from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RouterUtilsContext = React.createContext<any>(null);

export const RouterUtils: React.FC = ({ children }) => {
  const navigate = useNavigateOriginal();
  const location = useLocationOriginal();

  // useRef retains object reference between re-renders
  const navigateRef =
    React.useRef<ReturnType<typeof useNavigateOriginal>>(navigate);
  const locationRef =
    React.useRef<ReturnType<typeof useLocationOriginal>>(location);

  navigateRef.current = navigate;
  locationRef.current = location;

  // contextValue never changes between re-renders since refs don't change between re-renders
  const contextValue = React.useMemo(
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
