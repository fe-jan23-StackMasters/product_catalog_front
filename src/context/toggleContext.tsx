import React, { createContext, useMemo, useState } from 'react';
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
  const [theme, setTheme] = useState<string>('dark');

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
