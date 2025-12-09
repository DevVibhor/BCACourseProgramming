import { StyleSheet } from "react-native";
import { Colors } from "../../Utils";
import Fonts from "../../Utils/Fonts";

const styles = StyleSheet.create({
  textStyleList: {
    fontSize: 14,
    color: Colors?.THEMEWHITE,
    textAlign: "center",
    fontFamily: Fonts?.poppinsMedium,
  },
  listItemContainer: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: "95%",
    alignSelf: "center",
    shadowColor: Colors?.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  mainContainerDark: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors?.THEMEDARKBLACK,
  },
  mainContainerLight: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors?.WHITE,
  },
  banner: {
    //backgroundColor: Colors?.BLACK,
    position: "absolute",
    width: "100%",
    height: 50,
    bottom: 0,
    alignSelf: "center",
  },
  descriptionStyle: {
    fontFamily: Fonts?.poppinsRegular,
    fontSize: 14,
    textAlign: "center",
    width: "85%",
    alignSelf: "center",
    marginTop: 10,
  },
  headerStyle: {
    fontFamily: Fonts?.poppinsBold,
    fontSize: 18,
    textAlign: "center",
    width: "85%",
    alignSelf: "center",
    marginTop: 10,
  },
  subjectModalContainer: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    top: "25%",
    borderRadius: 18,
    paddingBottom: 20,
  },
  crossIconStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 10,
    top: 10,
  },
  disclaimerStyle: {
    fontFamily: Fonts?.poppinsRegular,
    fontSize: 14,
    color: Colors?.BLACKTRANSPARENT2,
    textAlign: "center",
    width: "75%",
    alignSelf: "center",
    marginVertical: 5,
  },
});

export default styles;
