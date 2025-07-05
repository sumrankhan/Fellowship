import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  //Caution !!!! firstly i don't know that this below line was missing as watching video tutorial.
  return useContext(ThemeContext);
}
