import React, { memo } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../ListView/styles";
import { Colors } from "../../Utils";
import { useTheme } from "@react-navigation/native";

const ListItems = ({ index, item, handleListClick }) => {
  const theme = useTheme()?.colors;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => handleListClick(item)}
      style={[
        theme?.themeType === "dark"
          ? [
              styles?.listItemContainer,
              {
                backgroundColor: theme?.bgColor,
              },
            ]
          : [
              styles?.listItemContainer,
              {
                backgroundColor:
                  index % 2 == 0 ? Colors?.BROWN : Colors?.DARKPURPLE,
              },
            ],
      ]}
    >
      <Text style={styles?.textStyleList}>{item?.question}</Text>
    </TouchableOpacity>
  );
};

function arePropsEqual(prevProps, nextProps) {
  // return nextProps === prevProps;
  return nextProps?.item === prevProps?.item;
}

export default memo(ListItems, arePropsEqual);
