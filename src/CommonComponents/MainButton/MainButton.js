import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Colors } from "../../Utils";

const MainButton = (props) => {
  return (
    <TouchableOpacity
      disabled={props?.disabled ?? false}
      activeOpacity={0.8}
      style={[
        styles?.buttonTouch,
        {
          width: props?.buttonWidth ?? "90%",
          borderRadius: props?.borderRadius ?? 5,
          backgroundColor:
            props?.disabled === true ? Colors?.LIGHTGREY : Colors?.PRIMARY,
        },
      ]}
      onPress={() => {
        props?.mainButtonPress();
      }}
    >
      {props?.image ? (
        <Image
          style={{ width: 20, height: 20, marginRight: 5 }}
          source={props?.image}
        />
      ) : null}
      <Text style={styles?.titleStyle}>{props?.title}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
