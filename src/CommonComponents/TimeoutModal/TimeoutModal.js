import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Colors, Constants } from "../../Utils/index";
import MainButton from "../MainButton/MainButton";
import Icons from "../Icons";
import { useTheme } from "@react-navigation/native";

const TimeoutModal = (props) => {
  const theme = useTheme()?.colors;
  return (
    <View
      style={{
        backgroundColor: Colors?.BLACKTRANSPARENT,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={[styles?.modalContainer, { backgroundColor: theme?.background }]}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => props?.closeTimeoutModal()}
          style={[
            styles?.crossIconStyle,
            {
              backgroundColor: Colors?.LIGHTGREY,
              paddingVertical: 5,
            },
          ]}
        >
          <Icons
            fill={Colors?.THEMEWHITE}
            width={20}
            height={20}
            name={"close"}
          />
        </TouchableOpacity>

        <Image
          resizeMode="contain"
          style={{
            width: "90%",
            height: 250,
            borderRadius: 20,
            alignSelf: "center",
            marginTop: 35,
          }}
          source={require("../../Assets/Images/timeout.png")}
        />
        <Text
          style={[
            styles?.timeoutHeader,
            {
              color: theme?.textColor,
            },
          ]}
        >
          {Constants?.networkError}
        </Text>
        <Text style={styles?.timeoutDesc}>{Constants?.networkErrorDesc}</Text>
        <MainButton
          title={Constants?.tryAgain}
          mainButtonPress={() => props?.tryAgain()}
        />
      </View>
    </View>
  );
};

export default TimeoutModal;
