import { StyleSheet } from "react-native";
import { Colors } from "../../Utils";
import Fonts from "../../Utils/Fonts";

const styles = StyleSheet.create({
  buttonTouch: {
    backgroundColor: Colors?.PRIMARY,
    paddingVertical: 5,
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 5,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  titleStyle: {
    fontSize: 16,
    color: Colors?.WHITE,
    textAlign: "center",
    fontFamily: Fonts?.openSansBold,
  },
});

export default styles;
