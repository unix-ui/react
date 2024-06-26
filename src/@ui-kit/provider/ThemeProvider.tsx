import React, { useState } from "react";
import { ThemeProps } from "../types/@types";
import { safeCssObj } from "../../utils/safeObj";
import { ThemeContext } from "../context/ThemeContext";
import { Global, ThemeProvider } from "@emotion/react";

const VenuxThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: ThemeProps;
}) => {
  const [_theme, setTheme] = useState<Partial<ThemeProps>>(theme);

  return (
    <ThemeContext.Provider value={setTheme}>
      <ThemeProvider theme={theme}>
        {children}
        <Global
          styles={{
            "*": {
              boxSizing: "border-box",
              margin: 0,
              padding: 0,
            },
            button: {
              border: "none",
              outline: "none",
              cursor: "pointer",
              background: "transparent",
            },
            input: {
              border: "none",
              outline: "none",
            },
            ...safeCssObj(
              theme?.globalStyles ||
                theme?.theme?.[theme.currentTheme]?.globalStyles
            ),
          }}
        />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { VenuxThemeProvider };
