import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Constants } from "../../Utils";
import styles from "./styles";
import { useTheme } from "@react-navigation/native";

const Card = (props) => {
  const theme = useTheme()?.colors;
  if (props?.side === "right") {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => props?.onCardPress()}
        style={[
          styles?.mainContainer,
          { backgroundColor: props?.bgColor, width: "90%", height: 120 },
        ]}
      >
        <View style={styles?.textContainer}>
          {props?.titleNum ? (
            <Text
              style={[
                styles?.textStyleGirl,
                {
                  color: theme?.cardText,
                },
              ]}
            >
              {props?.titleNum}
            </Text>
          ) : null}

          {props?.newTitle ? (
            <Text
              style={[
                styles?.textStyleGirl,
                { fontSize: props?.fontSize, color: theme?.cardText },
              ]}
            >
              {props?.newTitle}
            </Text>
          ) : null}
          {props?.title ? (
            <Text
              style={[
                styles?.textStyleGirl,
                {
                  fontSize: 20,
                  lineHeight: 48,
                  textTransform: "none",
                  color: theme?.cardText,
                },
              ]}
            >
              {props?.title}
            </Text>
          ) : null}
          {props?.titleNum ? (
            <Text
              style={[
                styles?.textStyleGirl,
                {
                  color: theme?.cardText,
                },
              ]}
            >
              {" "}
              {Constants?.semester}
            </Text>
          ) : null}
        </View>

        <View style={{ transform: [{ rotateY: "180deg" }] }}>
          {props?.localImage ? (
            <View
              style={[
                styles?.imageContainer,
                {
                  transform: [{ scaleX: props?.transformed === true ? -1 : 1 }],
                },
              ]}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 110,
                  height: 110,
                }}
                source={props?.localImage}
              />
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  } else if (props?.side === "left") {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => props?.onCardPress()}
        style={[
          styles?.mainContainer,
          { backgroundColor: props?.bgColor, width: "90%", height: 120 },
        ]}
      >
        <View
          style={{
            transform:
              props?.transformed === true
                ? [{ rotateY: "180deg" }]
                : [{ rotateY: "360deg" }],
            marginLeft: props?.transformed === true ? 20 : null,
          }}
        >
          {/* {props?.image ? (
            <>
              <View style={styles?.boyImageStyle}></View>
              <Icons width={165} height={185} name={props?.image} />
            </>
          ) : null} */}

          {props?.localImage ? (
            <View style={styles?.imageStyleLeft}>
              <Image
                resizeMode="contain"
                style={{
                  width: 110,
                  height: 110,
                  left: 10,
                }}
                source={props?.localImage}
              />
            </View>
          ) : null}
        </View>

        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            right: 20,
            position: "absolute",
          }}
        >
          {props?.titleNum ? (
            <Text style={[styles?.textStyleGirl, { color: theme?.cardText }]}>
              {props?.titleNum}
            </Text>
          ) : null}

          {props?.newTitle ? (
            <Text
              style={[
                styles?.textStyleGirl,
                {
                  fontSize: props?.fontSize,
                  textAlign: props?.textAlign,
                  color: theme?.cardText,
                },
              ]}
            >
              {props?.newTitle}
            </Text>
          ) : null}

          {props?.title ? (
            <Text
              style={[
                styles?.textStyleGirl,
                {
                  fontSize: 20,
                  lineHeight: 48,
                  textTransform: "none",
                  color: theme?.cardText,
                },
              ]}
            >
              {props?.title}
            </Text>
          ) : null}

          {props?.titleNum ? (
            <Text style={[styles?.textStyleGirl, { color: theme?.cardText }]}>
              {" "}
              {Constants?.semester}
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  } else if (props?.side === "bottom") {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => props?.onCardPress()}
        style={[
          styles?.mainContainer,
          {
            backgroundColor: props?.bgColor,
          },
        ]}
      >
        {props?.localImage ? (
          <View
            style={[
              styles?.imageStyleLeft,
              {
                width: 100,
                height: 100,
                borderRadius: 50,
                transform:
                  props?.transformed === true
                    ? [{ rotateY: "180deg" }]
                    : [{ rotateY: "360deg" }],
              },
            ]}
          >
            <Image
              resizeMode="contain"
              style={{
                width: 100,
                height: 100,
                left: 10,
              }}
              source={props?.localImage}
            />
          </View>
        ) : null}

        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            left: 15,
            position: "absolute",
            top: 10,
          }}
        >
          {props?.titleNum ? (
            <Text
              style={[
                styles?.textStyleGirl,
                { fontSize: 22, color: theme?.cardText },
              ]}
            >
              {props?.titleNum}
            </Text>
          ) : null}

          {props?.newTitle ? (
            <Text
              style={[
                styles?.textStyleGirl,
                { fontSize: props?.size ?? 18, color: theme?.cardText },
              ]}
            >
              {/* {props?.newTitle.split(" ").join("\n")} */}
              {props?.newTitle.replace(/ /g, "\n").replace(/_/g, " ")}
            </Text>
          ) : null}

          {props?.title ? (
            <Text
              style={[
                styles?.textStyleGirl,
                {
                  fontSize: 16,
                  lineHeight: 30,
                  textTransform: "none",
                  color: theme?.cardText,
                },
              ]}
            >
              {props?.title}
            </Text>
          ) : null}
          {props?.titleNum ? (
            <Text
              style={[
                styles?.textStyleGirl,
                { fontSize: 22, color: theme?.cardText },
              ]}
            >
              {" "}
              {Constants?.semester}
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  }
};

export default Card;
