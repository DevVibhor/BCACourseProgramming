import React, { memo } from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import styles from "./styles";
import { Colors, Fonts, Constants } from "../../Utils";

const CarouselCardItem = ({ item, index, handleCarouselClick }) => {
  return (
    <TouchableOpacity
      onPress={() => handleCarouselClick(item)}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={{
          uri: item?.img ? item?.img : Constants?.urls?.placeholderImage,
        }}
        imageStyle={{
          borderRadius: 10,
          borderColor: Colors?.BLACKTRANSPARENT2,
          borderWidth: 0.1,
        }}
        resizeMode="cover"
        style={{
          flex: 1,
          // height: 250,
          height: 200,
          justifyContent: "flex-end",
        }}
        key={index}
      >
        <Text numberOfLines={1} style={styles.alertHeader}>
          {item?.type}
        </Text>
        <Text numberOfLines={2} style={styles.header}>
          {item?.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

// export default CarouselCardItem;
function arePropsEqual(prevProps, nextProps) {
  return nextProps?.item === prevProps?.item;
}

export default memo(CarouselCardItem, arePropsEqual);
