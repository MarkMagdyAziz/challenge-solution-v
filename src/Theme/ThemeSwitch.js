import React, { useContext } from "react";

import { LightBulb, Moon } from "heroicons-react";

import { ThemeContext } from "./ThemeProvider";
import Switch from "react-switch";

const getStyles = () => ({
  switch: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "flex-end",
    height: "100%",
    paddingLeft: 10,
  },
});

const ThemeSwitch = () => {
  const { setTheme, mode } = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <Switch
      checked={mode === "light" ? true : false}
      height={50}
      width={100}
      offColor="#1d1f2f"
      onColor="#FDB813"
      checkedIcon={
        <LightBulb style={styles.switch} color="white" className="light" />
      }
      uncheckedIcon={
        <Moon style={styles.switch} color="white" className="dark" />
      }
      onChange={setTheme}
    />
  );
};

export default ThemeSwitch;
