import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Loader, Header } from '../../CommonComponents/index';
import { useTheme } from '@react-navigation/native';
import { Colors, Fonts, Constants } from '../../Utils/index';
import getMethod from '../../api/getAPI';
// import analytics from "@react-native-firebase/analytics";

const Semester6 = props => {
  const { title } = props?.route?.params;
  const theme = useTheme()?.colors;
  const [loader, setLoader] = useState(true);
  const [projectsList, setProjectsList] = useState([]);

  const openProjectURL = async link => {
    // await analytics().logEvent("openProjectURL", {
    //   button: "GitHub",
    //   link: link,
    // });
    Linking?.openURL(link);
  };

  const getProjectsList = async () => {
    setLoader(true);
    const response = await getMethod(Constants?.urls?.projectsList);
    if (response?.status === 200) {
      setProjectsList(response?.data);
      setLoader(false);
    } else {
      setLoader(false);
    }
  };

  useEffect(() => {
    getProjectsList();
  }, []);

  const RenderProjects = item => {
    return (
      <View
        style={[
          styles?.projectListStyle,
          { backgroundColor: theme?.background },
        ]}
      >
        <Text
          style={[
            styles?.projectTitle,
            {
              color: theme?.textColor,
            },
          ]}
        >
          {item?.name}
        </Text>
        <Text
          style={[
            styles?.detailsText,
            {
              color: theme?.lightTextColor,
            },
          ]}
        >
          Framework: {item?.tech?.framework}
        </Text>
        <Text
          style={[
            styles?.detailsText,
            {
              color: theme?.lightTextColor,
            },
          ]}
        >
          Languages: {item?.tech?.languages}
        </Text>
        <Text
          style={[
            styles?.projectDetailsText,
            {
              color: theme?.textColor,
            },
          ]}
        >
          {item?.desc}
        </Text>
        <TouchableOpacity
          style={styles?.githubButton}
          onPress={() => openProjectURL(item?.link)}
        >
          <Text style={styles?.buttonText}>Visit repo on GitHub</Text>
          <Image
            source={require('../../Assets/Images/github.png')}
            style={styles?.githubIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: theme?.fgColor,
      }}
    >
      <Loader loader={loader} />
      <Header
        navigationProp={props?.navigation}
        back={true}
        title={title}
        menu={true}
      />
      <View>
        <Text
          style={[
            styles?.descriptionText,
            {
              color: theme?.lightTextColor,
            },
          ]}
        >
          During the 6th semester, BCA students are required to develop
          individual projects. {'\n\n'}To inspire your creativity, consider
          exploring these open-source React Native projects as potential choices
          for your 6th-semester BCA project.
        </Text>
      </View>

      <View>
        <FlatList
          data={projectsList}
          renderItem={({ item, index }) => RenderProjects(item, index)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet?.create({
  descriptionText: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: Fonts?.poppinsMedium,
    padding: 10,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: Fonts?.poppinsRegular,
    paddingTop: 3,
  },
  projectTitle: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: Fonts?.openSansBold,
    padding: 10,
    textDecorationLine: 'underline',
  },
  detailsText: {
    fontSize: 13,
    fontFamily: Fonts?.poppinsRegular,
    fontStyle: 'italic',
  },
  projectDetailsText: {
    fontSize: 15,
    fontFamily: Fonts?.openSansRegular,
    paddingVertical: 10,
  },
  githubButton: {
    flexDirection: 'row',
    backgroundColor: Colors?.WHITE,
    width: '60%',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    padding: 5,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors?.BLACK,
    marginBottom: 20,
  },
  githubIcon: { width: 20, height: 20, alignSelf: 'center' },
  projectListStyle: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

export default Semester6;
