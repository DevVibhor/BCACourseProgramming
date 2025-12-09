import React, { memo } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Colors, Constants, Fonts } from "../../Utils";

const MemesFlatList = ({ item, index, downloadPhoto }) => {
  return (
    <View
      style={{
        backgroundColor: Colors?.WHITE,
        paddingHorizontal: 10,
        width: "95%",
        // height: 600,
        marginVertical: 20,
        // height: "70%",
        alignSelf: "center",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        borderRadius: 10,
      }}
    >
      <Image
        resizeMode="contain"
        style={{
          width: "100%",
          height: 400,
        }}
        source={{
          uri: item?.meme ? item?.meme : Constants?.urls?.placeholderImage,
        }}
      />

      <TouchableOpacity
        onPress={() => downloadPhoto(item?.meme)}
        style={{
          backgroundColor: Colors?.PRIMARY,
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 5,
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            color: Colors?.WHITE,
            fontFamily: Fonts?.poppinsMedium,
            fontSize: 14,
          }}
        >
          {Constants?.saveToGallery}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
function arePropsEqual(prevProps, nextProps) {
  return nextProps?.item === prevProps?.item;
}

export default memo(MemesFlatList, arePropsEqual);
