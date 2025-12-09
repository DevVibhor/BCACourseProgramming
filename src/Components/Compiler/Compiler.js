import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { Header } from '../../CommonComponents';
import { useTheme } from '@react-navigation/native';

const Compiler = props => {
  const theme = useTheme()?.colors;
  const { title } = props?.route?.params;
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: theme?.fgColor,
      }}
    >
      <Header navigationProp={props?.navigation} back={true} title={title} />
      <WebView source={{ uri: 'https://rextester.com/' }} style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

export default Compiler;
