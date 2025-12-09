import React, { useEffect, useRef } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Header } from '../../CommonComponents';
import { useIsFocused } from '@react-navigation/native';

import { Constants } from '../../Utils';
import { useTheme } from '@react-navigation/native';

const ContentView = props => {
  const theme = useTheme()?.colors;
  const { title, content, blogTitle, img } = props?.route?.params;
  const scrollRef = useRef();
  const isFocused = useIsFocused();

  useEffect(() => {
    scrollRef.current.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
  }, [isFocused]);

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: theme?.fgColor,
      }}
    >
      <Header
        navigationProp={props?.navigation}
        back={true}
        title={title}
        menu={true}
      />

      <ScrollView ref={scrollRef} style={{ width: '100%', height: '100%' }}>
        <Text
          style={[
            styles?.blogTitleStyle,
            {
              color: theme?.textColor,
            },
          ]}
        >
          {blogTitle}
        </Text>

        <Image
          resizeMode="cover"
          resizeMethod="auto"
          style={styles?.imageStyle}
          source={{ uri: img ? img : Constants?.urls?.placeholderImage }}
        />

        <Text
          style={[
            styles?.contentStyle,
            {
              color: theme?.textColor,
            },
          ]}
        >
          {content}
        </Text>

        <Text
          style={[
            styles?.noteStyle,
            {
              color: theme?.lightTextColor,
            },
          ]}
        >
          {Constants?.interviewNote}
        </Text>

        <View style={{ height: 80, width: '100%' }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContentView;
