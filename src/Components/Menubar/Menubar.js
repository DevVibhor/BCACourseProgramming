import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons } from '../../CommonComponents';
import { Constants } from '../../Utils';
import styles from './styles';
import { RowContainer } from '../../CommonComponents';
import { useTheme } from '@react-navigation/native';

const Menubar = props => {
  const theme = useTheme()?.colors;

  const { navigation } = props;

  const closeButton = useCallback(() => {
    navigation?.closeDrawer();
  }, [navigation]);

  return (
    <SafeAreaView
      style={[
        styles?.mainContainer,
        {
          backgroundColor: theme?.menuBar,
        },
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => closeButton()}
        style={[
          styles?.crossIconStyle,
          {
            backgroundColor: theme?.imageBG,
          },
        ]}
      >
        <Icons fill={theme?.imageFill} width={20} height={20} name={'close'} />
      </TouchableOpacity>

      <Image
        style={styles?.iconImageStyle}
        source={require('../../Assets/Images/logo.png')}
      />

      <Text
        style={[
          styles?.byText,
          {
            color: theme?.textColor,
          },
        ]}
      >
        {Constants?.byTechNark}
      </Text>

      <Text
        style={[
          styles?.versionText,
          {
            color: theme?.textColor,
          },
        ]}
      >
        v{Constants?.appVersion}
      </Text>

      <ScrollView>
        <View
          style={[
            styles?.viewContainer,
            {
              backgroundColor: theme?.menuBarFill,
            },
          ]}
        >
          <Text
            style={[
              styles?.textStyleHeader,
              {
                color: theme?.textColor,
              },
            ]}
          >
            {Constants?.otherApps}
          </Text>

          <RowContainer
            navigationProp={navigation}
            imagePath={require('../../Assets/Images/csharp_icon.png')}
            titleText={Constants?.appList?.csharp}
            buttonText="C#"
          />

          <View style={styles?.dividerLine} />

          <RowContainer
            navigationProp={navigation}
            imagePath={require('../../Assets/Images/css_icon.png')}
            titleText={Constants?.appList?.css}
            buttonText="CSS"
          />

          <View style={styles?.dividerLine} />

          <RowContainer
            navigationProp={navigation}
            imagePath={require('../../Assets/Images/html_icon.png')}
            titleText={Constants?.appList?.html}
            buttonText="HTML"
          />

          <View style={styles?.dividerLine} />

          <RowContainer
            navigationProp={navigation}
            imagePath={require('../../Assets/Images/javascript_icon.png')}
            titleText={Constants?.appList?.javaScript}
            buttonText="JavaScript"
          />

          <View style={styles?.dividerLine} />

          <RowContainer
            navigationProp={navigation}
            imagePath={require('../../Assets/Images/r_icon.png')}
            titleText={Constants?.appList?.r}
            buttonText="R"
          />

          <View style={styles?.dividerLine} />

          <RowContainer
            navigationProp={navigation}
            imagePath={require('../../Assets/Images/python_icon.png')}
            titleText={Constants?.appList?.python}
            buttonText="Python"
          />

          <View style={styles?.dividerLine} />

          <RowContainer
            navigationProp={navigation}
            imagePath={require('../../Assets/Images/sql_icon.png')}
            titleText={Constants?.appList?.sql}
            buttonText="SQL"
          />
        </View>
        <View
          style={[
            styles?.viewContainer,
            {
              backgroundColor: theme?.menuBarFill,
            },
          ]}
        >
          <Text
            style={[
              styles?.textStyleHeader,
              {
                color: theme?.textColor,
              },
            ]}
          >
            {Constants?.socials}
          </Text>

          <RowContainer
            navigationProp={navigation}
            image="youtube"
            titleText={Constants?.youtube}
            buttonText="YouTube"
          />

          <View style={styles?.dividerLine} />

          <RowContainer
            navigationProp={navigation}
            image="twitter"
            titleText={Constants?.twitter}
            buttonText="Twitter"
          />

          <View style={styles?.dividerLine} />

          <RowContainer
            navigationProp={navigation}
            image="bulb"
            titleText={Constants?.suggestions}
            buttonText="Suggestions"
          />

          <View style={styles?.dividerLine} />

          <RowContainer
            navigationProp={navigation}
            image="bug"
            titleText={Constants?.reportABug}
            buttonText="Report"
          />
        </View>
        <View
          style={[
            styles?.viewContainer,
            {
              backgroundColor: theme?.menuBarFill,
            },
          ]}
        >
          <Text
            style={[
              styles?.textStyleHeader,
              {
                color: theme?.textColor,
              },
            ]}
          >
            {Constants?.more}
          </Text>

          <RowContainer
            navigationProp={navigation}
            image="policy"
            titleText={Constants?.privacyPolicy}
            buttonText="Privacy"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menubar;
