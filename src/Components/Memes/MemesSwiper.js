import React, { memo } from "react";
import { View, Image } from "react-native";
import { MainButton } from "../../CommonComponents";
import { Constants } from "../../Utils";
import { useTheme } from "@react-navigation/native";

const MemesSwiper = ({ card, downloadPhoto, sharePhoto }) => {
  const theme = useTheme()?.colors;
  return (
    <View
      style={{
        backgroundColor: theme?.background,
        paddingHorizontal: 10,
        width: "95%",
        // height: "70%",
        height: "90%",
        alignSelf: "center",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        borderRadius: 10,
      }}
    >
      <Image
        resizeMode="contain"
        resizeMethod="auto"
        style={{
          width: "100%",
          height: "90%",
        }}
        source={{
          uri: card?.meme ? card?.meme : Constants?.urls?.placeholderImage,
        }}
      />

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <MainButton
          title={Constants?.save}
          image={require("../../Assets/Images/download.png")}
          mainButtonPress={() => downloadPhoto(card?.meme)}
          buttonWidth={"45%"}
        />

        <MainButton
          title={Constants?.share}
          image={require("../../Assets/Images/send.png")}
          mainButtonPress={() => sharePhoto(card?.meme)}
          buttonWidth={"45%"}
        />
      </View>
    </View>
  );
};

// export default MemesSwiper;
function arePropsEqual(prevProps, nextProps) {
  // return nextProps === prevProps;
  return nextProps?.card === prevProps?.card;
}

export default memo(MemesSwiper, arePropsEqual);
