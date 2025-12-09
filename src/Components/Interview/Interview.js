import React, { useState, useEffect } from 'react';
import { Text, FlatList, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../ListView/styles';
import { Header, Loader, TimeoutModal } from '../../CommonComponents';
import { Colors, Constants } from '../../Utils';
import getMethod from '../../api/getAPI';
import InterviewFlatList from './InterviewFlatlist';
import { useIsFocused } from '@react-navigation/native';

import { useTheme } from '@react-navigation/native';
// import analytics from "@react-native-firebase/analytics";

const Interview = props => {
  const theme = useTheme()?.colors;
  //const theme = "light";
  const isFocused = useIsFocused();
  const { title } = props?.route?.params;

  const [loader, setLoader] = useState(true);
  const [interviewData, setInterviewData] = useState([]);
  const [interviewDesc, setInterviewDesc] = useState('');
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
    getInterviewData();
  };

  const getInterviewData = async () => {
    setLoader(true);
    const response = await getMethod(Constants?.urls?.interview);
    if (response?.status === 200) {
      setInterviewData(
        response?.data?.interview.sort(() => Math.random() - 0.5),
      );
      setInterviewDesc(response?.data?.desc);
      setLoader(false);
    } else {
      setLoader(false);
    }
  };

  useEffect(() => {
    getInterviewData();
  }, []);

  const handleItemClick = item => {
    props?.navigation?.navigate('ContentView', {
      title: Constants?.interviewQuestion,
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

      {/* <Text style={styles?.descriptionStyle}>{interviewDesc}</Text> */}
      <FlatList
        data={interviewData}
        // scrollEnabled={false}
        renderItem={({ item, index }) => (
          <InterviewFlatList
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
            {interviewDesc}
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

export default Interview;
