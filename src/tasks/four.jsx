import { BackToHome } from "../App";
import { Moon, LightBulb } from "heroicons-react";
import * as React from "react";
import "./styles/_four.scss";
import { getStyles } from "./../Theme/getStyles";
import { ThemeContext } from "./../Theme/ThemeProvider";
/* 
  Think: How we would use this Dark/Light mode switcher on other potential routes/components in a bigger application.
  Would your solution work for this?
*/

const ChallengeFour = () => {
  // 1st dark mode page
  const [darkTheme, setDarkTheme] = React.useState(false);

  //_________________________________________________________
  // 2nd Dark/Light mode switcher theme for whole app

  const { mode } = React.useContext(ThemeContext);
  const styles = getStyles(mode);

  //________________________________End State____________________________________
  return (
    <div className={darkTheme ? "dark-theme content" : "light-theme content"}>
      <BackToHome />
      <div className="level">
        <div>
          <h1 className="title is-1 " style={(styles.header, styles.text)}>
            Challenge 4
          </h1>
        </div>
        <h1>{darkTheme ? "Dark Mode" : "Light Mode"}</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <button
            type="button"
            className="ch4__dark-mode-btn"
            onClick={() => setDarkTheme(true)}
          >
            <Moon fontSize={30} />
          </button>

          {/* <DarkModeToggle
            onClick={() => setDarkTheme((prevTheme) => !prevTheme)}
            size={80}
          /> */}
          <button
            type="button"
            className="ch4__dark-mode-btn"
            onClick={() => setDarkTheme(false)}
          >
            <LightBulb fontSize={30} />
          </button>
        </div>
      </div>
      <h2 style={styles.text} className="subtitle ">
        This page is looking a little dark. Mind turning on the lights in here?
        It seems like the toggle button doesn't work...! <br />
        You are right it seems weird also Submit button and Save button weren't
        worked but i had fixed the issue!
        <span role="img" aria-label="ponder">
          🤔
        </span>
      </h2>
      <div className="columns has-text-grey-lighter">
        <div className="column">
          <p style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vel dolor massa. Quisque euismod ante nec quam tristique
            sollicitudin. Morbi dolor nisi, vehicula sit amet mi vitae,
            scelerisque vehicula risus. Mauris mauris augue, fermentum id ex
            quis, tempor convallis nulla. Etiam auctor tellus blandit purus
            tristique lacinia. Mauris turpis lorem, ultricies sit amet orci
            hendrerit, sodales sodales tellus. Suspendisse fermentum, tortor
            eget pellentesque lacinia, velit augue consequat odio, ut fermentum
            quam diam id odio. Suspendisse pulvinar quam magna, eget tempor
            neque ullamcorper in.
          </p>
        </div>
        <div className="column">
          <p style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vel dolor massa. Quisque euismod ante nec quam tristique
            sollicitudin. Morbi dolor nisi, vehicula sit amet mi vitae,
            scelerisque vehicula risus. Mauris mauris augue, fermentum id ex
            quis, tempor convallis nulla. Etiam auctor tellus blandit purus
            tristique lacinia. Mauris turpis lorem, ultricies sit amet orci
            hendrerit, sodales sodales tellus. Suspendisse fermentum, tortor
            eget pellentesque lacinia, velit augue consequat odio, ut fermentum
            quam diam id odio. Suspendisse pulvinar quam magna, eget tempor
            neque ullamcorper in.
          </p>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
        <div className="buttons level-right mt-4">
          <button className="button is-primary">Save</button>
          <button className="button is-link">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeFour;
