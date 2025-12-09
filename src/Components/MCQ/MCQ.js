import React, { useEffect, useState, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView,
  Modal,
  Image,
  BackHandler,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import SyntaxHighlighter from 'react-native-syntax-highlighter';
// import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';
import { useTheme, useIsFocused } from '@react-navigation/native';
// import SplashScreen from "react-native-splash-screen";
import { Colors, Fonts, Constants } from '../../Utils';

import { CommonStyles, MainButton } from '../../CommonComponents';
import { getMethod } from '../../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MCQ = props => {
  const isFocused = useIsFocused();
  const flatListRef = useRef();
  const theme = useTheme()?.colors;
  const [mcqData, setMCQData] = useState([]);
  const [time, setTime] = useState(250);
  const [sec, setSec] = useState();
  const timerRef = React.useRef(time);
  const [startIndex, setStartIndex] = useState(0);
  const [question, setQuestion] = useState();
  const [testComplete, setTestComplete] = useState(false);
  const [score, setScore] = useState(90);
  const [userDetails, setUserDetails] = useState({
    photo: '',
    name: '',
  });

  const TestCompleteModal = () => {
    return (
      <View
        resizeMode="contain"
        source={{ uri: Constants?.urls?.confetti }}
        style={[
          styles?.modalContainer,
          {
            backgroundColor: theme?.fgColor,
          },
        ]}
      >
        <Image
          resizeMethod="scale"
          source={{ uri: Constants?.urls?.confetti }}
          style={{
            width: '100%',
            height: '50%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
        />
        <Image
          resizeMode="cover"
          style={styles?.userStyle}
          source={{ uri: userDetails?.photo }}
        />
        <Image
          resizeMode="cover"
          style={styles?.trophyStyle}
          source={{
            uri:
              score >= 80
                ? Constants?.urls?.trophy1
                : score < 80 && score >= 40
                ? Constants?.urls?.trophy2
                : Constants?.urls?.trophy3,
          }}
        />
        <Text
          style={[
            styles?.percentageStyle,
            {
              color:
                score >= 80
                  ? Colors?.lightGreen
                  : score < 80 && score >= 40
                  ? Colors?.yellow
                  : Colors?.RED,
            },
          ]}
        >
          90%
        </Text>

        <Text
          style={[
            styles?.descStyle,
            {
              color: theme?.textColor,
            },
          ]}
        >
          Whooh! That was a good score {userDetails?.name}
        </Text>
        <Text
          style={[
            styles?.subDescStyle,
            {
              color: theme?.textColor,
            },
          ]}
        >
          You got 23 answers right out of 30 in C Programming quiz of 1st
          Semester in Set A.
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-around',
            width: '90%',
            marginTop: 30,
            marginBottom: 10,
          }}
        >
          <MainButton buttonWidth={'45%'} title="View Results" />

          <MainButton buttonWidth={'45%'} title="Challenge Friends" />
        </View>

        <Text
          onPress={() => skipLogin()}
          style={{
            color: Colors?.GREY,
            alignSelf: 'center',
            marginVertical: 10,
          }}
        >
          Go Back
        </Text>
      </View>
    );
  };

  const testCompleted = async () => {
    const userName = await AsyncStorage?.getItem('UserFirstName');
    const userImage = await AsyncStorage?.getItem('UserPhoto');
    setUserDetails({
      name: userName,
      photo: userImage,
    });
    setTestComplete(true);
  };

  const manageSelection = (selected, index) => {
    if (mcqData?.length - 1 !== index) {
      setStartIndex(index + 1);

      setMCQData(
        mcqData.map(val =>
          val?.id === index
            ? {
                ...val,
                selected: selected,
              }
            : val,
        ),
      );

      setQuestion({
        id: mcqData[index + 1]?.id,
        question: mcqData[index + 1]?.question,
        A: mcqData[index + 1]?.A,
        B: mcqData[index + 1]?.B,
        C: mcqData[index + 1]?.C,
        D: mcqData[index + 1]?.D,
        code: mcqData[index + 1]?.code,
        answer: mcqData[index + 1]?.answer,
      });
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: index,
      });
    } else {
      // testCompleted();
      setStartIndex(index);

      setMCQData(
        mcqData.map(val =>
          val?.id === index
            ? {
                ...val,
                selected: selected,
              }
            : val,
        ),
      );

      setQuestion({
        id: mcqData[index]?.id,
        question: mcqData[index]?.question,
        A: mcqData[index]?.A,
        B: mcqData[index]?.B,
        C: mcqData[index]?.C,
        D: mcqData[index]?.D,
        code: mcqData[index]?.code,
        answer: mcqData[index]?.answer,
      });
    }
  };

  const onIndexClick = id => {
    setQuestion({
      id: mcqData[id]?.id,
      question: mcqData[id]?.question,
      A: mcqData[id]?.A,
      B: mcqData[id]?.B,
      C: mcqData[id]?.C,
      D: mcqData[id]?.D,
      code: mcqData[id]?.code,
      answer: mcqData[id]?.answer,
      selected: mcqData[id]?.selected,
    });
    setStartIndex(id);
  };

  const RenderCount = item => {
    return (
      <Pressable
        onPress={() => onIndexClick(item?.id)}
        style={{
          height: 50,
          width: 50,
          backgroundColor:
            item?.selected !== ''
              ? Colors?.lightGreen
              : startIndex === item?.id
              ? theme?.countColorSelected
              : theme?.countColorUnselected,
          borderColor: Colors?.WHITE,
          borderWidth: 0.8,
          marginHorizontal: 10,
          borderRadius: 40,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,

          shadowColor: item?.id === startIndex ? theme?.textColor : null,
          shadowOffset: {
            width: item?.id === startIndex ? 2 : null,
            height: item?.id === startIndex ? 4 : null,
          },
          shadowOpacity: item?.id === startIndex ? 10.25 : null,
          shadowRadius: item?.id === startIndex ? 5.84 : null,

          elevation: item?.id === startIndex ? 10 : null,
        }}
      >
        <Text
          style={[
            styles?.indexStyle,
            {
              // color: item?.id === startIndex ? theme?.bgColor : theme?.cardText,
              color:
                item?.selected !== ''
                  ? theme?.cardText
                  : startIndex === item?.id
                  ? theme?.cardText
                  : theme?.textColor,
            },
          ]}
        >
          {item?.id + 1}
        </Text>
      </Pressable>
    );
  };

  const RenderMCQ = (item, index) => {
    return (
      <ScrollView style={{ marginTop: 10 }}>
        <Text
          style={[
            styles?.question,
            {
              color: theme?.textColor,
            },
          ]}
        >
          {item?.question}
        </Text>

        {item?.code !== '' &&
        item?.code !== undefined &&
        item?.code !== null ? (
          <SyntaxHighlighter
            fontSize={14}
            language="c"
            style={atomOneDark}
            highlighter={'hljs'}
          >
            {item?.code}
          </SyntaxHighlighter>
        ) : null}

        <Pressable
          onPress={() => manageSelection('A', index)}
          style={[
            styles?.optionsContainer,
            {
              backgroundColor:
                item?.selected === 'A' ? Colors?.PRIMARY : theme?.background,
            },
          ]}
        >
          <Text
            style={[
              styles?.unSelectedOption,
              {
                color:
                  item?.selected === 'A' ? theme?.cardText : theme?.textColor,
              },
            ]}
          >
            A.
          </Text>
          <Text
            style={[
              styles?.unSelectedOption,
              {
                width: '95%',
                color:
                  item?.selected === 'A' ? theme?.cardText : theme?.textColor,
              },
            ]}
          >
            {item?.A}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => manageSelection('B', index)}
          style={[
            styles?.optionsContainer,
            {
              backgroundColor:
                item?.selected === 'B' ? Colors?.PRIMARY : theme?.background,
            },
          ]}
        >
          <Text
            style={[
              styles?.unSelectedOption,
              {
                color:
                  item?.selected === 'B' ? theme?.cardText : theme?.textColor,
              },
            ]}
          >
            B.
          </Text>
          <Text
            style={[
              styles?.unSelectedOption,
              {
                color:
                  item?.selected === 'B' ? theme?.cardText : theme?.textColor,
                width: '95%',
              },
            ]}
          >
            {item?.B}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => manageSelection('C', index)}
          style={[
            styles?.optionsContainer,
            {
              backgroundColor:
                item?.selected === 'C' ? Colors?.PRIMARY : theme?.background,
            },
          ]}
        >
          <Text
            style={[
              styles?.unSelectedOption,
              {
                color:
                  item?.selected === 'C' ? theme?.cardText : theme?.textColor,
              },
            ]}
          >
            C.
          </Text>
          <Text
            style={[
              styles?.unSelectedOption,
              {
                color:
                  item?.selected === 'C' ? theme?.cardText : theme?.textColor,
                width: '95%',
              },
            ]}
          >
            {item?.C}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => manageSelection('D', index)}
          style={[
            styles?.optionsContainer,
            {
              backgroundColor:
                item?.selected === 'D' ? Colors?.PRIMARY : theme?.background,
            },
          ]}
        >
          <Text
            style={[
              styles?.unSelectedOption,
              {
                color:
                  item?.selected === 'D' ? theme?.cardText : theme?.textColor,
              },
            ]}
          >
            D.
          </Text>
          <Text
            style={[
              styles?.unSelectedOption,
              {
                color:
                  item?.selected === 'D' ? theme?.cardText : theme?.textColor,
                width: '95%',
              },
            ]}
          >
            {item?.D}
          </Text>
        </Pressable>
      </ScrollView>
    );
  };

  // useEffect(() => {
  //   SplashScreen?.hide();
  // }, []);

  useEffect(() => {
    if (mcqData[0]?.selected) {
      const found = mcqData.every(val => val?.selected !== '');

      if (found === true) {
        testCompleted();
      }
    }
  }, [mcqData]);

  const backAction = () => {
    if (testComplete === true) {
      setTestComplete(false);
    }
  };

  const endQuiz = () => {};

  useEffect(() => {
    if (isFocused === true) {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
        testCompleted();
      } else {
        setTime(Math.floor(timerRef.current / 60));
        setSec(timerRef.current % 60);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    const fetchMCQData = async () => {
      let updatedArr = [];
      const response = await getMethod(Constants?.urls?.mcq_sem1_01);

      updatedArr = response?.data?.map(val => ({ ...val, selected: '' }));
      setMCQData(updatedArr);

      setQuestion({
        id: updatedArr[startIndex]?.id,
        question: updatedArr[startIndex]?.question,
        A: updatedArr[startIndex]?.A,
        B: updatedArr[startIndex]?.B,
        C: updatedArr[startIndex]?.C,
        D: updatedArr[startIndex]?.D,
        code: updatedArr[startIndex]?.code,
        answer: updatedArr[startIndex]?.answer,
        selected: '',
      });
    };

    fetchMCQData();
  }, []);

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: theme?.fgColor,
      }}
    >
      <View
        style={{
          backgroundColor: theme?.bgColor,
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Text
          onPress={() => endQuiz()}
          style={{
            position: 'absolute',
            left: 10,
            top: 10,
            padding: 10,
            color: Colors?.WHITE,
            fontFamily: Fonts?.openSansRegular,
            fontSize: 16,
          }}
        >
          Exit
        </Text>
        <View
          style={{
            backgroundColor: Colors?.darkPurple,
            borderRadius: 15,
            marginTop: 15,
            paddingVertical: 2,
            width: 70,
            alignItems: 'center',

            shadowColor: Colors?.WHITE,
            shadowOffset: {
              width: 2,
              height: 4,
            },
            shadowOpacity: 10.25,
            shadowRadius: 5.84,

            elevation: 10,
          }}
        >
          {time === 1200 ? (
            <Text
              style={[
                styles?.questionCount,
                {
                  color: Colors?.WHITE,
                },
              ]}
            >
              05:00
            </Text>
          ) : (
            <Text
              style={[
                styles?.questionCount,
                {
                  color: Colors?.WHITE,
                },
              ]}
            >
              {`${time < 10 ? 0 : ''}${time}:${sec < 10 ? 0 : ''}${sec}`}
            </Text>
          )}
        </View>

        <FlatList
          ref={flatListRef}
          horizontal={true}
          data={mcqData}
          renderItem={({ item }) => RenderCount(item)}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            backgroundColor: theme?.bgColor,
            marginTop: 20,
            paddingBottom: 10,
          }}
        />
      </View>

      {/* <View style={styles?.rowContainer}>
        <Text
          style={[
            styles?.questionCount,
            {
              color: theme?.textColor,
            },
          ]}
        >
          Question {question?.id + 1} of {mcqData?.length}
        </Text>
      </View> */}

      {RenderMCQ(question, startIndex)}

      <Modal animationType="fade" transparent={true} visible={testComplete}>
        <TestCompleteModal />
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  crossIconStyle: {
    width: 25,
    height: 25,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  questionCount: {
    fontFamily: Fonts?.poppinsBold,
    fontSize: 16,
    paddingTop: 2,
  },
  question: {
    fontSize: 20,
    fontFamily: Fonts?.poppinsBold,
    width: '95%',
    alignSelf: 'center',
  },
  unSelectedOption: {
    fontSize: 18,
    fontFamily: Fonts?.poppinsRegular,
  },
  optionsContainer: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderRadius: 10,
    borderColor: Colors?.GREY,
    borderWidth: 0.5,
    padding: 5,
    paddingHorizontal: 10,
  },
  indexStyle: {
    fontSize: 18,
    fontFamily: Fonts?.poppinsBold,
    paddingTop: 2,
  },
  modalContainer: {
    width: '100%',
    height: '100%',
  },
  trophyStyle: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    position: 'absolute',
    top: '12%',
  },
  userStyle: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    position: 'absolute',
    top: '14%',
    zIndex: 1,
    borderRadius: 50,
  },
  percentageStyle: {
    fontSize: 50,
    fontFamily: Fonts?.poppinsBold,
    textAlign: 'center',
  },
  descStyle: {
    fontSize: 20,
    fontFamily: Fonts?.poppinsMedium,
    textAlign: 'center',
  },
  subDescStyle: {
    fontSize: 18,
    fontFamily: Fonts?.poppinsRegular,
    textAlign: 'center',
  },
});

export default MCQ;
