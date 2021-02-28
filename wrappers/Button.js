import { Button as RNButton } from "react-native-elements";
import { withTheme } from "../themeProvider";

function Button({ themes }) {
  return <RNButton />;
}

export default withTheme(Button);
