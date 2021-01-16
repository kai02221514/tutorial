import { useState } from 'react';
import { ThemeContext,THEMES } from "./Components/ThemeContext";
import { withLoading } from "./Components/With.Loading";
import { getLanguages } from "./Components/Language";
import App from "./App"

const AppComponent = withLoading(App, getLanguages)

export const AppContainer = () => {
  const [theme, setTheme] = useState(THEMES.dark);

  const toggleTheme = () => {
    const nextTheme = (theme === THEMES.dark) ? THEMES.light : THEMES.dark;
    setTheme(nextTheme);
  }

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <AppComponent />
    </ThemeContext.Provider>
  )
}