import { StyleSheet } from "react-native";
import { Colors } from "../../Utils";
import Fonts from "../../Utils/Fonts";

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignSelf: "center",
    overflow: "hidden",
    width: "48%",
    height: 160,
    marginTop: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textStyleGirl: {
    textTransform: "uppercase",
    fontSize: 36,
    fontFamily: Fonts?.poppinsBold,
  },
  iconContainerGirl: {
    bottom: -10,
    transform: [{ rotateY: "180deg" }],
  },
  iconContainerBoy: {
    bottom: -3,
  },
  textStyleBoy: {
    textTransform: "uppercase",
    fontSize: 36,
    fontFamily: Fonts?.poppinsBold,
    color: Colors?.WHITE,
    // paddingLeft: 30,
    // position: 'absolute',
    // right: 30,
  },
  girlImageStyle: {
    width: 110,
    height: 110,
    backgroundColor: Colors?.CHARACTERBG,
    position: "absolute",
    bottom: 0,
    borderRadius: 55,
    right: 40,
  },
  boyImageStyle: {
    width: 110,
    height: 110,
    backgroundColor: Colors?.CHARACTERBG,
    position: "absolute",
    bottom: 0,
    borderRadius: 55,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: 20,
    alignSelf: "center",
  },
  imageContainer: {
    width: 120,
    height: 120,
    backgroundColor: Colors?.CHARACTERBG,
    position: "absolute",
    bottom: -10,
    borderRadius: 60,
    right: 40,
    justifyContent: "flex-end",
  },
  imageStyle: {
    width: 120,
    height: 120,
    backgroundColor: Colors?.CHARACTERBG,
    position: "absolute",
    bottom: -10,
    borderRadius: 60,
    right: 40,
    justifyContent: "flex-end",
  },
  imageStyleLeft: {
    width: 120,
    height: 120,
    backgroundColor: Colors?.CHARACTERBG,
    position: "absolute",
    bottom: -10,
    borderRadius: 60,
    left: 40,
    justifyContent: "flex-end",
  },
});

export default styles;
