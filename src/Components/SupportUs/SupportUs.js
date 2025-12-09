import React from 'react';
import { Text, View, Linking, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Header, MainButton } from '../../CommonComponents/index';
import { useTheme } from '@react-navigation/native';
import { Constants } from '../../Utils/index';

const baseStyles = StyleSheet.create({
  fullSize: {
    width: '100%',
    height: '100%',
  },
});

const SupportUs = props => {
  const theme = useTheme()?.colors;

  const handleGithub = async () => {
    Linking?.openURL(Constants?.urls?.githubRepo);
  };

  return (
    <SafeAreaView
      style={[baseStyles.fullSize, { backgroundColor: theme?.fgColor }]}
    >
      <Header
        navigationProp={props?.navigation}
        back={true}
        title={'Support Us'}
        menu={true}
      />

      <View style={styles?.mainContainer}>
        <Text
          style={[
            styles?.primaryTitle,
            {
              color: theme?.textColor,
            },
          ]}
        >
          A Quick Update
        </Text>
        <Text
          style={[
            styles?.secondaryTitle,
            {
              color: theme?.textColor,
            },
          ]}
        >
          Thank you for using this app and being part of its journey. I built it
          during my college days, and it has grown far beyond what I expected.
          As I’m unable to maintain it actively now, I’ve made the project
          open-source on GitHub. The app is built using React Native, so
          developers can contribute, learn, or use it as a way to sharpen their
          skills while improving the app. If you’d like to explore or
          contribute, you’ll find the source code on GitHub. Thanks again for
          the support — it genuinely means a lot. ❤️
        </Text>

        <MainButton
          mainButtonPress={() => handleGithub()}
          title={Constants?.githubRepo}
        />
      </View>
    </SafeAreaView>
  );
};

export default SupportUs;
