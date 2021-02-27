import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import ThemeProvider from "./Theme/ThemeProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  rootElement
);
