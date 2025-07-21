import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeColor = 'default' | 'red' | 'blue' | 'green' | 'purple' | 'orange';

interface ThemeContextType {
  currentTheme: ThemeColor;
  setTheme: (theme: ThemeColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const colorThemes = {
  default: {
    primary: '220 14.3% 95.9%',
    primaryForeground: '220.9 39.3% 11%',
    accent: '220 14.3% 95.9%',
  },
  red: {
    primary: '0 72% 51%',
    primaryForeground: '0 0% 100%',
    accent: '0 84% 60%',
  },
  blue: {
    primary: '217 91% 60%',
    primaryForeground: '0 0% 100%',
    accent: '213 94% 68%',
  },
  green: {
    primary: '142 71% 45%',
    primaryForeground: '0 0% 100%',
    accent: '142 76% 36%',
  },
  purple: {
    primary: '262 83% 58%',
    primaryForeground: '0 0% 100%',
    accent: '263 70% 50%',
  },
  orange: {
    primary: '25 95% 53%',
    primaryForeground: '0 0% 100%',
    accent: '27 96% 61%',
  },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('default');

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
    localStorage.setItem('preferred-theme', theme);
    
    // Update CSS variables
    const root = document.documentElement;
    const colors = colorThemes[theme];
    
    root.style.setProperty('--primary', colors.primary);
    root.style.setProperty('--primary-foreground', colors.primaryForeground);
    root.style.setProperty('--accent', colors.accent);
  };

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('preferred-theme') as ThemeColor;
    if (savedTheme && colorThemes[savedTheme]) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};