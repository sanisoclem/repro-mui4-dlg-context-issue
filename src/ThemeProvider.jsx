import React, { useEffect, useState } from "react";
import * as MuiV0 from "material-ui/styles";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import getMuiTheme from "material-ui/styles/getMuiTheme";

const ThemeProviderComponent = ({ children }) => {
  const theme = {
    spacing: {
      iconSize: 24,
      desktopGutter: 24,
      desktopGutterMore: 32,
      desktopGutterLess: 16,
      desktopGutterMini: 8,
      desktopKeylineIncrement: 64,
      desktopDropDownMenuItemHeight: 32,
      desktopDropDownMenuFontSize: 15,
      desktopDrawerMenuItemHeight: 48,
      desktopSubheaderHeight: 48,
      desktopToolbarHeight: 56,
    },
    typography: { button: {} },
    fontFamily: "Roboto,sans-serif",
    palette: {
      primary1Color: "#3175f5",
      primary2Color: "#3175f5",
      primary3Color: "#f5f5f5",
      accent1Color: "#448aff",
      accent2Color: "#f5f5f5",
      accent3Color: "#9e9e9e",
      textColor: "rgba(0,0,0,0.87)",
      secondaryTextColor: "#ffffff",
      alternateTextColor: "#ffffff",
      canvasColor: "#ffffff",
      alternateСanvasColor: "#212121",
      alternate1Color: "rgba(255, 255, 255, 0.54)",
      alternate2Color: "#f5f5f5",
      borderColor: "rgba(0, 0, 0, 0.12)",
      disabledColor: "rgba(0,0,0,0.3)",
      pickerHeaderColor: "#03a9f4",
      clockCircleColor: "rgba(0,0,0,0.07)",
      shadowColor: "rgba(0,0,0,1)",
    },
  };

  const customTheme = {
    ...theme,
    palette: {
      ...theme.palette,
      primary2Color: theme.palette.primary1Color,
    },
  };
  const themeV0 = getMuiTheme(customTheme);
  const themeV4 = createTheme({
    palette: {
      primary: {
        main: customTheme.palette.primary1Color,
      },
    },
    typography: { button: {} },
  });

  console.log(themeV0, themeV4);
  return (
    <MuiThemeProvider theme={themeV4}>
      <MuiV0.MuiThemeProvider muiTheme={themeV0}>
        {children}
      </MuiV0.MuiThemeProvider>
    </MuiThemeProvider>
  );
};

export default ThemeProviderComponent;
