import { StyleSheet } from "react-native";
import { Colors } from "../../Utils";
import Fonts from "../../Utils/Fonts";

const styles = StyleSheet.create({
  header: {
    color: Colors?.BLACK,
    fontSize: 16,
    paddingLeft: 10,
    marginTop: 10,
    fontFamily: Fonts?.poppinsBold,
  },
  contentStyle: {
    color: Colors?.BLACKTRANSPARENT,
    fontSize: 15,
    paddingLeft: 10,
    marginTop: 10,
    fontFamily: Fonts?.poppinsRegular,
  },
  readMoreStyle: {
    color: Colors?.BLACKTRANSPARENT2,
    fontSize: 15,
    paddingRight: 10,
    marginTop: 5,
    fontFamily: Fonts?.poppinsMedium,
    alignSelf: "flex-end",
  },
  descriptionStyle: {
    fontFamily: Fonts?.poppinsRegular,
    fontSize: 14,
    color: Colors?.BLACKTRANSPARENT,
    textAlign: "center",
    width: "85%",
    alignSelf: "center",
    marginTop: 10,
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
