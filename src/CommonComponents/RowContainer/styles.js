import { StyleSheet } from "react-native";
import Fonts from "../../Utils/Fonts";
const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    paddingHorizontal: 20,
  },
  textStyle: {
    fontFamily: Fonts?.poppinsMedium,
    alignSelf: "flex-start",
    paddingVertical: 10,
    fontSize: 13,
  },
  moreAppsIcon: { width: 25, height: 25, alignSelf: "center", marginRight: 5 },
});

export default styles;
