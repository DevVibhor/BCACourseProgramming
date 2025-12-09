import React, { useEffect, useState } from 'react';
import { Text, FlatList, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Header, Loader, TimeoutModal } from '../../CommonComponents';
import { Colors, Constants } from '../../Utils';
import getMethod from '../../api/getAPI';
import BlogFlatList from './BlogFlatList';
import { useIsFocused } from '@react-navigation/native';

import { useTheme } from '@react-navigation/native';
// import analytics from "@react-native-firebase/analytics";

const Blog = props => {
  const theme = useTheme()?.colors;
  const { title } = props?.route?.params;
  const [loader, setLoader] = useState(true);
  const [guidanceData, setGuidanceData] = useState([]);
  const [guidanceDesc, setGuidanceDesc] = useState('');
  const isFocused = useIsFocused();
  const [enableTimeoutModal, setEnableTimeoutModal] = useState(false);

  const closeTimeoutModal = async () => {
    // await analytics().logEvent("TimeoutModal", {
    //   button: "close",
    // });
    setEnableTimeoutModal(false);
    props?.navigation?.goBack();
  };

  const tryAgainModal = async () => {
    // await analytics().logEvent("TimeoutModal", {
    //   button: "Retry",
    //   screen: title,
    // });
    getGuidanceData();
  };

  const getGuidanceData = async () => {
    setLoader(true);
    const response = await getMethod(Constants?.urls?.guidance);
    if (response?.status === 200) {
      setGuidanceDesc(response?.data?.desc);
      setGuidanceData(
        response?.data?.guidance?.sort(() => Math.random() - 0.5),
      );
      setLoader(false);
    }
  };

  useEffect(() => {
    getGuidanceData();
  }, []);

  const handleItemClick = item => {
    props?.navigation?.navigate('ContentView', {
      title: Constants?.careerGuidance,
      blogTitle: item?.title,
      content: item?.content,
      img: item?.img,
    });
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

      <FlatList
        data={guidanceData}
        renderItem={({ item, index }) => (
          <BlogFlatList
            item={item}
            index={index}
            handleItemClick={val => handleItemClick(val)}
          />
        )}
        keyExtractor={(item, index) => 'key' + index}
        contentContainerStyle={{ paddingBottom: 80 }}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        ListHeaderComponent={() => (
          <Text
            style={[
              styles?.descriptionStyle,
              {
                color: theme?.textColor,
              },
            ]}
          >
            {guidanceDesc}
          </Text>
        )}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={enableTimeoutModal}
      >
        <TimeoutModal
          closeTimeoutModal={() => closeTimeoutModal()}
          tryAgain={() => tryAgainModal()}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default Blog;
