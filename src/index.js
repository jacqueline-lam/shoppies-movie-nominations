import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      // White
      light: "#FFFFFF",
      dark: "#cccccc",
      main: "#FFF",
    },
    secondary: {
      // Shopify light green
      light: "#c8f277",
      main: "#95BF47",
      dark: "#64943E"
    },
    remove: {
      main: "#CF6679",
    },
    action: {
      disabled: "#696969",
      disabledBackground: "#696969"
    },
  },
  fontFamily: "Roboto"
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
