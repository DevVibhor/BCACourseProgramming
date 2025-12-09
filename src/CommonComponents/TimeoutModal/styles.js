import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../Utils";

const styles = StyleSheet.create({
  modalContainer: {
    width: "90%",
    backgroundColor: Colors?.WHITE,
    borderRadius: 18,
    alignItems: "center",
    paddingBottom: 10,
    flexDirection: "column",
  },
  timeoutHeader: {
    fontSize: 25,
    color: Colors?.BLACK,
    textAlign: "center",
    fontFamily: Fonts?.poppinsBold,
    textTransform: "uppercase",
    width: "90%",
  },
  timeoutDesc: {
    fontSize: 16,
    color: Colors?.GREY,
    textAlign: "center",
    fontFamily: Fonts?.openSansRegular,
    width: "95%",
    marginBottom: 5,
  },
  reportDesc: {
    fontSize: 16,
    color: Colors?.BLACKTRANSPARENT,
    textAlign: "center",
    fontFamily: Fonts?.openSansRegular,
  },
  reportDescLink: {
    fontSize: 16,
    color: Colors?.BLUE,
    textAlign: "center",
    fontFamily: Fonts?.openSansRegular,
    textDecorationLine: "underline",
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
});

export default styles;
