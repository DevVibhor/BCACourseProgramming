import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { Colors, Constants } from "../../Utils";

const TabContainer = (props) => {
  return (
    <View style={[styles?.tabContainer, { borderColor: Colors?.LIGHTGREY }]}>
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={props?.notes === true ? true : false}
        onPress={() => {
          props?.setNotes(true);
          props?.setCode(false);
          props?.setQuiz(false);
        }}
        style={
          props?.notes === true
            ? [
                styles?.buttonStyle,
                { backgroundColor: `${Colors?.PRIMARY}40`, width: "80%" },
              ]
            : styles?.buttonStyle
        }
      >
        <Image
          style={{
            width: props?.notes === true ? 25 : 20,
            height: props?.notes === true ? 25 : 20,
          }}
          source={require("../../Assets/Images/notes.png")}
        />

        {props?.notes === true ? (
          <Text style={[styles?.tabText, { color: Colors?.PRIMARY }]}>
            {Constants?.notes}
          </Text>
        ) : null}
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        disabled={props?.code === true ? true : false}
        onPress={() => {
          props?.setNotes(false);
          props?.setCode(true);
          props?.setQuiz(false);
        }}
        style={
          props?.code === true
            ? [
                styles?.buttonStyle,
                { backgroundColor: `${Colors?.PRIMARY}40`, width: "80%" },
              ]
            : styles?.buttonStyle
        }
      >
        <Image
          style={{
            width: props?.code === true ? 25 : 20,
            height: props?.code === true ? 25 : 20,
          }}
          source={require("../../Assets/Images/code.png")}
        />

        {props?.code === true ? (
          <Text style={[styles?.tabText, { color: Colors?.PRIMARY }]}>
            {Constants?.code}
          </Text>
        ) : null}
      </TouchableOpacity>

      {/* <TouchableOpacity
        activeOpacity={0.8}
        disabled={props?.quiz === true ? true : false}
        onPress={() => {
          props?.setNotes(false);
          props?.setCode(false);
          props?.setQuiz(true);
        }}
        style={
          props?.quiz === true
            ? [
                styles?.buttonStyle,
                { backgroundColor: `${Colors?.PRIMARY}40`, width: "70%" },
              ]
            : styles?.buttonStyle
        }
      >
        <Image
          style={{
            width: props?.quiz === true ? 25 : 20,
            height: props?.quiz === true ? 25 : 20,
          }}
          source={require("../../Assets/Images/mcq.png")}
        />

        {props?.quiz === true ? (
          <Text style={[styles?.tabText, { color: Colors?.PRIMARY }]}>
            {Constants?.quiz}
          </Text>
        ) : null}
      </TouchableOpacity> */}
    </View>
  );
};

export default TabContainer;
