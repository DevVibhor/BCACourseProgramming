import { StyleSheet } from "react-native";
import { Colors } from "../../Utils";
import Fonts from "../../Utils/Fonts";

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly",
    borderWidth: 0.2,
    borderRadius: 30,
    marginVertical: 20,
    alignSelf: "center",
  },
  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    alignSelf: "center",
    justifyContent: "center",
    width: "20%",
    paddingVertical: 5,
  },
  tabText: {
    fontSize: 24,
    textAlign: "center",
    marginLeft: 10,
    fontFamily: Fonts?.poppinsBold,
  },
});

export default styles;
