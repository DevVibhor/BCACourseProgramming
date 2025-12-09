import { StyleSheet } from "react-native";
import { Colors } from "../../Utils";
import Fonts from "../../Utils/Fonts";

const InterviewStyles = StyleSheet.create({
  header: {
    fontSize: 16,
    paddingLeft: 10,
    marginTop: 10,
    fontFamily: Fonts?.poppinsMedium,
  },
  contentStyle: {
    fontSize: 15,
    paddingLeft: 10,
    // marginTop: 0,
    fontFamily: Fonts?.poppinsRegular,
  },
  readMoreStyle: {
    color: Colors?.BLACKTRANSPARENT2,
    fontSize: 14,
    paddingRight: 10,
    marginTop: 5,
    fontFamily: Fonts?.poppinsMedium,
    alignSelf: "flex-end",
  },
});

export default InterviewStyles;
