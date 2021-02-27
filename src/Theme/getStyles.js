import { theme } from "./theme";
export const getStyles = (mode) => ({
  header: {
    fontSize: 34,
    fontWeight: "400",
  },
  app: {
    height: "100%",
    width: "100%",
    padding: 20,
    backgroundColor: theme[mode].backgroundColor,
  },
  body: {
    backgroundColor: theme[mode].backgroundColor,
    width: "100%",
  },
  text: {
    fontWeight: "200",
    color: theme[mode].color,
  },
  theme: {
    color: theme[mode].highlight,
  },
});
