import { StyleSheet } from "react-native";
import { Colors } from "../../Utils";
import Fonts from "../../Utils/Fonts";

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: Colors?.WHITE,
    textAlign: "center",
    // textTransform: 'uppercase',
    fontFamily: Fonts?.openSansBold,
  },
  mainContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    height: 50,
    width: "100%",
    alignSelf: "center",
    overflow: "hidden",
  },
  mainContainerDark: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    height: 50,
    width: "100%",
    alignSelf: "center",
    backgroundColor: Colors?.THEMEDARKBLACK,
    overflow: "hidden",
  },
  mainContainerLight: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    height: 50,
    width: "100%",
    alignSelf: "center",
    backgroundColor: Colors?.PRIMARY,
    overflow: "hidden",
  },
  hamContainer: {
    backgroundColor: Colors?.WHITE,
    borderRadius: 5,
    shadowColor: Colors?.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    position: "absolute",
    right: 20,
    transform: [{ rotate: "180deg" }],
  },
  backButtonStyle: {
    position: "absolute",
    left: 10,
    paddingVertical: 10,
    paddingRight: 10,
  },
  redView: {
    width: 7,
    height: 7,
    backgroundColor: Colors?.BRIGHTRED,
    borderRadius: 3.5,
    top: 20,
    left: 15,
    zIndex: 1,
    position: "absolute",
  },
});

export default styles;
