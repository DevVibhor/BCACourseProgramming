import React, { useRef, useEffect, useCallback } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Icons } from '../../CommonComponents';
import { Colors, Constants, Fonts } from '../../Utils';
import styles from './styles';
import CodeHighlighter from 'react-native-code-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Clipboard from '@react-native-clipboard/clipboard';
import { useIsFocused, useTheme } from '@react-navigation/native';

const baseStyles = StyleSheet.create({
  fullSize: {
    width: '100%',
    height: '100%',
  },
  centerSelf: {
    alignSelf: 'center',
  },
  divider: {
    height: 1,
    width: '100%',
    marginTop: 10,
  },
  spacer: {
    height: 50,
  },
});

const CodeView = props => {
  const theme = useTheme()?.colors;
  const isFocused = useIsFocused();
  const scrollViewRef = useRef(null);

  const { navigation, route } = props;
  const { params } = route ?? {};
  const { item, navigatedFrom, screen } = params ?? {};
  const { question, answer, url, code } = item ?? {};
  const isCodeScreen = navigatedFrom === 'Code';

  const codeStyle = StyleSheet.create({
    codeContainer: {
      padding: 16,
      minWidth: '100%',
    },
    text: {
      fontSize: 16,
      fontFamily: Fonts?.openSansRegular,
    },
  });

  const copyToClipboard = useCallback(() => {
    Clipboard.setString(code ?? '');
    ToastAndroid.show('Copied', ToastAndroid.SHORT);
  }, [code]);

  useEffect(() => {
    if (isFocused) {
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    }
  }, [isFocused]);

  return (
    <SafeAreaView
      style={[baseStyles.fullSize, { backgroundColor: theme?.fgColor }]}
    >
      <Header
        navigationProp={navigation}
        back={true}
        title={screen}
        menu={true}
      />

      <View style={styles?.questionRowContainer}>
        <View style={baseStyles.centerSelf}>
          <Text
            style={[
              styles?.questionStyle,
              {
                color: theme?.textColor,
              },
            ]}
          >
            {question}
          </Text>
        </View>
      </View>

      <ScrollView ref={scrollViewRef}>
        {isCodeScreen ? (
          <CodeHighlighter
            hljsStyle={atomOneDarkReasonable}
            containerStyle={codeStyle.codeContainer}
            textStyle={codeStyle.text}
            language="typescript"
          >
            {code}
          </CodeHighlighter>
        ) : (
          <>
            <View
              style={
                theme?.themeType === 'dark'
                  ? styles?.noteStyleContainerDark
                  : styles?.noteStyleContainerLight
              }
            >
              <Text
                style={
                  theme?.themeType === 'dark'
                    ? styles?.noteStyleDark
                    : styles?.noteStyleLight
                }
              >
                {answer}
              </Text>
            </View>

            {code ? (
              <>
                <View
                  style={[
                    baseStyles.divider,
                    { backgroundColor: Colors?.BLACK },
                  ]}
                />
                <View style={baseStyles.centerSelf}>
                  <Text
                    style={[
                      styles?.questionStyle,
                      {
                        color: theme?.textColor,
                      },
                    ]}
                  >
                    {Constants?.code}
                  </Text>
                </View>

                <CodeHighlighter
                  hljsStyle={atomOneDarkReasonable}
                  containerStyle={codeStyle.codeContainer}
                  textStyle={codeStyle.text}
                  language="typescript"
                >
                  {code}
                </CodeHighlighter>
              </>
            ) : null}
          </>
        )}

        {isCodeScreen ? (
          <View style={styles?.questionRowContainer}>
            <View style={baseStyles.centerSelf}>
              <Text
                style={[
                  styles?.questionStyle,
                  {
                    color: theme?.textColor,
                  },
                ]}
              >
                {Constants?.output}
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={copyToClipboard}
              style={styles?.bookmarkContainer}
            >
              <Icons
                fill={theme?.imageFill}
                name={'copy'}
                width={30}
                height={30}
              />
            </TouchableOpacity>
          </View>
        ) : null}

        {isCodeScreen ? (
          <View style={styles?.imageViewContainer}>
            <Image
              resizeMode="contain"
              style={styles?.imageStyle}
              source={{ uri: url ? url : Constants?.urls?.placeholderImage }}
            />
          </View>
        ) : null}

        <View style={baseStyles.spacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CodeView;
