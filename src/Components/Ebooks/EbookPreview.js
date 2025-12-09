import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../CommonComponents';
import { Constants } from '../../Utils';
import { useTheme } from '@react-navigation/native';
import Pdf from 'react-native-pdf';

const EbookPreview = props => {
  const theme = useTheme()?.colors;

  return (
    <SafeAreaView
      style={{ width: '100%', height: '100%', backgroundColor: theme?.fgColor }}
    >
      <Header
        navigationProp={props?.navigation}
        back={true}
        menu={true}
        title={Constants?.ebooks}
      />

      <Pdf
        trustAllCerts={false}
        source={{ uri: props?.route?.params?.url }}
        style={[
          styles.pdf,
          {
            backgroundColor: theme?.fgColor,
          },
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet?.create({
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default EbookPreview;
