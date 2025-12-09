import { StyleSheet } from "react-native";
import { Colors } from "../../Utils";
import Fonts from "../../Utils/Fonts";

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  viewContainer: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  iconImageStyle: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 20,
  },
  versionText: {
    alignSelf: "center",
    paddingTop: 1,
    fontFamily: Fonts?.poppinsRegular,
    fontSize: 12,
  },
  byText: {
    alignSelf: "center",
    paddingTop: 10,
    fontFamily: Fonts?.poppinsRegular,
    fontSize: 12,
  },
  textStyleLight: {
    color: Colors?.BLACK,
    fontFamily: Fonts?.poppinsMedium,
    alignSelf: "flex-start",
    paddingVertical: 10,
    fontSize: 13,
  },
  textStyleDark: {
    color: Colors?.THEMEWHITE,
    fontFamily: Fonts?.poppinsMedium,
    alignSelf: "flex-start",
    paddingVertical: 10,
    fontSize: 13,
  },
  textStyleHeader: {
    fontFamily: Fonts?.poppinsBlack,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 13,
    alignSelf: "center",
  },
  dividerLine: {
    height: 1,
    backgroundColor: Colors?.DARKGREY,
    width: "80%",
    alignSelf: "center",
  },
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    paddingHorizontal: 20,
  },
  crossIconStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 20,
    top: 20,
  },
  textStyle: {
    fontFamily: Fonts?.poppinsRegular,
    alignSelf: "center",
    fontSize: 12,
  },
  themeText: {
    fontFamily: Fonts?.poppinsMedium,
    alignSelf: "flex-start",
    paddingVertical: 10,
    fontSize: 13,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    paddingHorizontal: 20,
    alignSelf: "center",
  },
});

export default styles;
