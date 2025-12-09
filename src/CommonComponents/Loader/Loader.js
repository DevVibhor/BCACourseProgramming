import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import styles from "./styles";
import { Colors } from "../../Utils";

const Loader = ({ loader }) => {
  if (loader === true) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          backgroundColor: Colors?.BLACKTRANSPARENT2,
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 1,
        }}
      >
        <ActivityIndicator
          animating={loader}
          color={"#fff"}
          size={"large"}
          hidesWhenStopped={true}
        />
      </View>
    );
  } else return null;
};

export default Loader;
