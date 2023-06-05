import { createContext, useEffect, useState } from "react";

interface IThemeContext {
  theme: string;
  setTheme?: Function;
}

const ThemeContext = createContext<IThemeContext>({
  theme: "",
  setTheme: undefined,
});

export const ThemeProvider: React.FC<any> = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.theme || "light");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    localStorage.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
