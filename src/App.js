import * as React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Routes from "./Routes";
import "./_app.scss";

import { getStyles } from "./Theme/getStyles";
import { ThemeContext } from "./Theme/ThemeProvider";
import ThemeSwitch from "./Theme/ThemeSwitch";

export default function App() {
  // access the mode value from ThemeContext
  const { mode } = React.useContext(ThemeContext);
  // pass mode value to styles, based on the mode
  const styles = getStyles(mode);
  return (
    <>
      <div style={{ float: "right" }}>
        <ThemeSwitch />
      </div>
      <BrowserRouter>
        <ul className="nav">
          <li>
            <Link to="/one">Challenge 1</Link>
          </li>
          <li>
            <Link to="/two">Challenge 2</Link>
          </li>
          <li>
            <Link to="/three">Challenge 3</Link>
          </li>
          <li>
            <Link to="/four">Challenge 4</Link>
          </li>
        </ul>
        <div style={styles.app} className="App">
          <Routes />
        </div>
      </BrowserRouter>
    </>
  );
}

export const Home = () => {
  // access the mode value from ThemeContext
  const { mode } = React.useContext(ThemeContext);
  // pass mode value to styles, based on the mode
  const styles = getStyles(mode);
  return (
    <div>
      <h1 className="title is-1 " style={(styles.header, styles.text)}>
        Hello
        <span aria-label="wave" role="img">
          👋
        </span>
      </h1>
      <h2 className="subtitle is-4 " style={styles.text}>
        We are looking for highly creative individuals. To find them, we have
        devised a test.
      </h2>

      <h2 className="subtitle is-4 " style={styles.text}>
        There are 4 challenges linked above, each is designed to test a
        different ability. The challenges get progressively more difficult.
      </h2>

      <h2 className="subtitle is-4 " style={styles.text}>
        All of the required libraries are provided.
      </h2>
      <h2 className="subtitle is-4 " style={styles.text}>
        Good luck.
      </h2>
    </div>
  );
};

export const BackToHome = () => (
  <Link to="/" className="button is-link is-light is-small is-rounded mb-4">
    &larr; Back to home
  </Link>
);
