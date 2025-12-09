import { StyleSheet } from "react-native";
import { Colors } from "../../Utils";
import Fonts from "../../Utils/Fonts";
const styles = StyleSheet.create({
  mainContainerLight: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors?.WHITEONE,
  },
  mainContainerDark: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors?.THEMEDARKBLACK,
  },
  questionStyle: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: Fonts?.poppinsMedium,
    padding: 10,
    textDecorationLine: "underline",
  },
  imageViewContainer: {
    alignSelf: "center",
    width: "95%",
    // height: '100%',
    alignItems: "center",
    backgroundColor: Colors?.BLACK,
    borderRadius: 10,
    marginBottom: 30,
  },
  imageStyle: {
    width: "95%",
    height: 300,
    maxHeight: "100%",
    borderRadius: 2,
    // height: '100%',
  },
  questionRowContainer: {
    flexDirection: "row",
    width: "95%",
    alignSelf: "center",
    justifyContent: "center",
  },
  noteStyleContainerDark: {
    backgroundColor: Colors?.THEMEDARKBLACK,
    width: "95%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
  },
  noteStyleContainerLight: {
    backgroundColor: Colors?.VERYLIGHTGREY,
    width: "95%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#363636",
  },
  noteStyleDark: {
    color: Colors?.THEMEWHITE,
    fontFamily: Fonts?.poppinsRegular,
    fontSize: 14,
  },
  noteStyleLight: {
    // color: Colors?.THEMEBLACK,
    color: "#CBC5C5",
    fontFamily: Fonts?.poppinsRegular,
    fontSize: 15,
    lineHeight: 25,
  },
  banner: {
    //backgroundColor: Colors?.BLACK,
    position: "absolute",
    width: "100%",
    height: 50,
    bottom: 0,
    alignSelf: "center",
  },
  crossIconStyle: {
    width: 24,
    height: 24,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 10,
    top: 8,
    backgroundColor: Colors?.GREY,
  },
  bookmarkContainer: {
    justifyContent: "center",
    right: 10,
    position: "absolute",
    top: 10,
  },
});

export default styles;
