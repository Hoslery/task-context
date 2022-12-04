import { ReactElement, useContext } from 'react';
import { ThemeContext } from './themeContext';

type Theme = 'light' | 'dark';

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(ThemeContext);
}
