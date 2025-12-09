import { StyleSheet } from "react-native";
import { Colors } from "../../Utils";

const styles = StyleSheet.create({
  crossIconStyle: {
    width: 24,
    height: 24,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 10,
    top: 8,
    backgroundColor: Colors?.BLACKTRANSPARENT,
  },
});

export default styles;
