import React, { createContext, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
// import { useCardsIds } from '../helpers/hooks/hooks';

type ThemeProps = {
  theme: string,
  setTheme: (theme: string) => void,
}

export const ThemeContext = createContext<ThemeProps>({
  theme: 'dark',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
