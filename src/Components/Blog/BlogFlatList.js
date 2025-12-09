import React, { memo } from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { Constants, Colors } from "../../Utils";
import { useTheme } from "@react-navigation/native";

const BlogFlatList = ({ item, index, handleItemClick }) => {
  const theme = useTheme()?.colors;
  return (
    <TouchableOpacity
      onPress={() => handleItemClick(item)}
      style={{
        flex: 1,
        marginVertical: 10,
        backgroundColor: theme?.background,
        paddingTop: 10,
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
      }}
    >
      <Image
        source={
          item?.img
            ? { uri: item?.img ? item?.img : Constants?.urls?.placeholderImage }
            : null
        }
        imageStyle={{
          borderRadius: 10,
          borderColor: Colors?.BLACKTRANSPARENT2,
          borderWidth: 0.1,
        }}
        resizeMode="cover"
        style={{
          flex: 1,
          height: 150,
          justifyContent: "flex-end",
          width: "95%",
          alignSelf: "center",
          borderRadius: 10,
          backgroundColor: Colors?.GREY,
        }}
        key={index}
      />
      <Text
        numberOfLines={2}
        style={[styles.header, { color: theme?.textColor }]}
      >
        {item?.title}
      </Text>

      <Text
        numberOfLines={3}
        style={[styles.contentStyle, { color: theme?.lightTextColor }]}
      >
        {item?.content}
      </Text>

      <Text
        numberOfLines={1}
        style={[styles.readMoreStyle, { color: theme?.lightTextColor }]}
      >
        {Constants?.readMore}
      </Text>
    </TouchableOpacity>
  );
};

function arePropsEqual(prevProps, nextProps) {
  return nextProps?.item === prevProps?.item;
}

export default memo(BlogFlatList, arePropsEqual);
// export default BlogFlatList;
