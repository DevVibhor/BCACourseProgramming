import React, { useEffect, useState } from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Loader } from '../../CommonComponents';
import { Constants, Fonts, Colors } from '../../Utils';
import { useTheme } from '@react-navigation/native';
import { getMethod } from '../../api/api';

import { CommonStyles } from '../../CommonComponents';
// import analytics from "@react-native-firebase/analytics";

const Ebooks = props => {
  const theme = useTheme()?.colors;
  const [loader, setLoader] = useState(true);
  const [ebooksData, setEbooksData] = useState({
    c: [],
    cpp: [],
    java: [],
    sql: [],
  });

  const openPDF = async url => {
    // await analytics().logEvent("Ebooks", {
    //   url: url,
    // });
    props?.navigation?.navigate('EbookPreview', {
      url: url,
    });
  };

  const RenderPDFList = (item, index) => {
    return (
      <Pressable
        onPress={() => openPDF(item?.urls)}
        style={styles?.rowContainer}
      >
        <Text style={{ color: theme?.textColor }}>• </Text>
        <Text style={styles?.bookName}>{item?.book}</Text>
      </Pressable>
    );
  };

  useEffect(() => {
    const fetchBooksData = async () => {
      const response = await getMethod(Constants?.urls?.ebooksURL);
      setEbooksData({
        c: response?.data?.C,
        cpp: response?.data?.Cpp,
        java: response?.data?.Java,
        sql: response?.data?.SQL,
      });
      setLoader(false);
    };

    fetchBooksData();
  }, []);

  return (
    <SafeAreaView
      style={{ width: '100%', height: '100%', backgroundColor: theme?.fgColor }}
    >
      <Loader loader={loader} />
      <Header
        navigationProp={props?.navigation}
        back={true}
        menu={true}
        title={Constants?.ebooks}
      />

      <ScrollView>
        <FlatList
          scrollEnabled={false}
          data={ebooksData?.c}
          renderItem={({ item, index }) => RenderPDFList(item, index)}
          ListHeaderComponent={
            <Text
              style={[
                styles?.langStyle,
                {
                  color: theme?.textColor,
                },
              ]}
            >
              C
            </Text>
          }
          contentContainerStyle={[
            styles?.flatListContainer,
            {
              backgroundColor: theme?.background,
            },
          ]}
        />

        <FlatList
          scrollEnabled={false}
          data={ebooksData?.cpp}
          renderItem={({ item, index }) => RenderPDFList(item, index)}
          ListHeaderComponent={
            <Text
              style={[
                styles?.langStyle,
                {
                  color: theme?.textColor,
                },
              ]}
            >
              C++
            </Text>
          }
          contentContainerStyle={[
            styles?.flatListContainer,
            {
              backgroundColor: theme?.background,
            },
          ]}
        />

        <FlatList
          scrollEnabled={false}
          data={ebooksData?.java}
          renderItem={({ item, index }) => RenderPDFList(item, index)}
          ListHeaderComponent={
            <Text
              style={[
                styles?.langStyle,
                {
                  color: theme?.textColor,
                },
              ]}
            >
              Java
            </Text>
          }
          contentContainerStyle={[
            styles?.flatListContainer,
            {
              backgroundColor: theme?.background,
            },
          ]}
        />

        <FlatList
          scrollEnabled={false}
          data={ebooksData?.sql}
          renderItem={({ item, index }) => RenderPDFList(item, index)}
          ListHeaderComponent={
            <Text
              style={[
                styles?.langStyle,
                {
                  color: theme?.textColor,
                },
              ]}
            >
              SQL
            </Text>
          }
          contentContainerStyle={[
            styles?.flatListContainer,
            {
              backgroundColor: theme?.background,
            },
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet?.create({
  langStyle: {
    fontSize: 20,
    fontFamily: Fonts?.poppinsBold,
    alignSelf: 'center',
  },
  bookName: {
    color: Colors?.BLUE,
    textDecorationLine: 'underline',
    paddingBottom: 5,
    fontFamily: Fonts?.poppinsRegular,
    fontSize: 14,
  },
  rowContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
  },
  flatListContainer: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 20,
    paddingVertical: 10,
    marginTop: 20,
    marginBottom: 5,

    shadowColor: Colors?.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Ebooks;
