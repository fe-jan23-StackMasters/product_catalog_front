import { ReactNode, createContext, useContext } from 'react';
import { useResize } from '../hooks/useResize';

interface ResizeContextValue {
  isMobileScreen: boolean;
}

export const ResizeContext = createContext<ResizeContextValue | undefined>(
  undefined,
);

interface ResizeProviderProps {
  children: ReactNode;
}

export const ResizeProvider = ({
  children,
}: ResizeProviderProps) => {
  const isMobileScreen = useResize();

  return (
    <ResizeContext.Provider value={{ isMobileScreen }}>
      {children}
    </ResizeContext.Provider>
  );
};

export const useResizeContext = () => {
  const resizeContext = useContext(ResizeContext);

  if (resizeContext === undefined) {
    throw new Error(
      'resizeContext must be used within a resizeContextProvider',
    );
  }

  return resizeContext;
};
