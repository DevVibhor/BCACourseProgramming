import { StyleSheet } from "react-native";
import { Colors, Constants } from "../../Utils";
import Fonts from "../../Utils/Fonts";

const styles = StyleSheet.create({
  blogTitleStyle: {
    fontSize: 18,
    marginVertical: 10,
    fontFamily: Fonts?.openSansMedium,
    textDecorationLine: "underline",
    width: "90%",
    alignSelf: "center",
    color: Colors?.BLACK,
    textAlign: "center",
  },
  contentStyle: {
    marginTop: 10,
    fontSize: 17,
    width: "90%",
    fontFamily: Fonts?.openSansRegular,
    alignSelf: "center",
    color: Colors?.BLACK,
  },
  imageStyle: {
    width: "90%",
    height: 250,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "center",
    backgroundColor: Colors?.WHITE,
  },
  noteStyle: {
    width: "90%",
    alignSelf: "center",
    textAlign: "left",
    fontFamily: Fonts?.poppinsRegular,
    fontSize: 14,
    color: Colors?.BLACKTRANSPARENT,
    marginTop: 15,
    textDecorationLine: "underline",
  },
  banner: {
    //backgroundColor: Colors?.BLACK,
    position: "absolute",
    width: "100%",
    height: 50,
    bottom: 0,
    alignSelf: "center",
  },
});

export default styles;
