import React from 'react';
import { Text, TouchableOpacity, Linking, Image } from 'react-native';
import styles from './styles';
import { Icons } from '../index';
import { Constants } from '../../Utils';
// import analytics from "@react-native-firebase/analytics";
import { useTheme } from '@react-navigation/native';

const RowContainer = props => {
  const theme = useTheme()?.colors;
  const handleButtonClick = async val => {
    // if (val === "Notes") {
    //   props?.navigationProp?.navigate("ListView", {
    //     screen: "Notes",
    //   });
    // } else if (val === "Code") {
    //   props?.navigationProp?.navigate("ListView", {
    //     screen: "Code",
    //   });
    // } else
    // await analytics().logEvent("Menu", {
    //   button: val,
    // });

    if (val === 'YouTube') {
      Linking.openURL(Constants?.urls?.youtube);
    } else if (val === 'Facebook') {
      Linking.openURL(Constants?.urls?.facebook);
    } else if (val === 'Twitter') {
      Linking.openURL(Constants?.urls?.twitter);
    } else if (val === 'Privacy') {
      Linking.openURL(Constants?.urls?.privacy);
    } else if (val === 'Home') {
      props?.navigationProp?.navigate('Home');
    } else if (val === 'Report') {
      Linking.openURL(
        `mailto:${Constants?.urls?.mail}?subject=Bug Report - ${Constants?.appName}&body=App Version:${Constants?.appVersion}`,
      );
    } else if (val === 'Suggestions') {
      Linking.openURL(
        `mailto:${Constants?.urls?.mail}?subject=Suggestions - ${Constants?.appName}`,
      );
    } else if (val === 'Play') {
      Linking.openURL(Constants?.urls?.googlePlay);
    } else if (val === 'C#') {
      Linking.openURL(Constants?.urls?.csharp);
    } else if (val === 'CSS') {
      Linking.openURL(Constants?.urls?.css);
    } else if (val === 'HTML') {
      Linking.openURL(Constants?.urls?.html);
    } else if (val === 'Java') {
      Linking.openURL(Constants?.urls?.java);
    } else if (val === 'JavaScript') {
      Linking.openURL(Constants?.urls?.javaScript);
    } else if (val === 'R') {
      Linking.openURL(Constants?.urls?.r);
    } else if (val === 'Python') {
      Linking.openURL(Constants?.urls?.python);
    } else if (val === 'SQL') {
      Linking.openURL(Constants?.urls?.sql);
    } else if (val === 'ReactNative') {
      Linking.openURL(Constants?.urls?.reactNative);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles?.rowStyle}
      onPress={() => handleButtonClick(props?.buttonText)}
    >
      {props?.image ? (
        <Icons
          fill={theme?.imageFill}
          width={30}
          height={30}
          name={props?.image}
        />
      ) : null}

      {props?.imagePath ? (
        <Image style={styles?.moreAppsIcon} source={props?.imagePath} />
      ) : null}

      <Text
        style={[
          styles?.textStyle,
          {
            color: theme?.textColor,
          },
        ]}
      >
        {props?.titleText}
      </Text>
    </TouchableOpacity>
  );
};

export default RowContainer;
