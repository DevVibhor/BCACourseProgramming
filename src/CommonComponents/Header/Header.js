import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Icons } from '..';
import { Colors, Constants } from '../../Utils';
import styles from './styles';
// import analytics from "@react-native-firebase/analytics";
import { useTheme } from '@react-navigation/native';

const Header = props => {
  const theme = useTheme()?.colors;
  const goBack = async () => {
    // await analytics().logEvent("Header", {
    //   button: "Back",
    // });
    props?.navigationProp?.goBack();
  };

  const toggleDrawer = async () => {
    // await analytics().logEvent("Header", {
    //   button: "Open_Drawer",
    // });
    props?.navigationProp?.toggleDrawer();
  };

  return (
    <View
      // style={
      //   theme === "dark"
      //     ? styles?.mainContainerDark
      //     : styles?.mainContainerLight
      // }
      style={[
        styles?.mainContainer,
        {
          backgroundColor: theme?.bgColor,
        },
      ]}
    >
      {props?.back === true ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => goBack()}
          style={styles?.backButtonStyle}
        >
          <Icons name={'back'} width={28} height={28} fill={Colors?.WHITE} />
        </TouchableOpacity>
      ) : null}

      {props?.bell === true ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => props?.bellIconButton()}
          style={styles?.backButtonStyle}
        >
          <Image
            style={{ width: 20, height: 20, marginLeft: 5 }}
            source={require('../../Assets/Images/bell.png')}
          />
          {props?.newNotifications === true ? (
            <View style={styles?.redView} />
          ) : null}
        </TouchableOpacity>
      ) : null}

      <Text style={styles?.textStyle}>{props?.title}</Text>

      {props?.compilerOptions === true ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => props?.compilerOptionsToggle()}
          style={{
            position: 'absolute',
            right: 15,
            padding: 5,
          }}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../../Assets/Images/options.png')}
          />
        </TouchableOpacity>
      ) : null}

      {props?.menu === true ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => toggleDrawer()}
          style={styles?.hamContainer}
        >
          <Icons
            name={'hamburgerMenu'}
            width={28}
            height={28}
            fill={theme?.hamFill}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Header;
