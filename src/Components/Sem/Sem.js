import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Linking,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../ListView/styles';
// import analytics from "@react-native-firebase/analytics";

import { Colors, Constants, Fonts } from '../../Utils';
import {
  Card,
  Header,
  Loader,
  TabContainer,
  Icons,
  TimeoutModal,
  MainButton,
} from '../../CommonComponents';
import { getMethod } from '../../api/api';
import { useIsFocused } from '@react-navigation/native';
import ListItems from './ListItems';
import { useTheme } from '@react-navigation/native';
import { data as code_sem1 } from '../../json/code_sem1.json';
import { data as code_sem2 } from '../../json/code_sem2.json';
import { data as code_sem3_oops } from '../../json/code_sem3_oops.json';
import { data as code_sem3_ds } from '../../json/code_sem3_ds.json';
import { data as code_sem4 } from '../../json/code_sem4.json';
import { data as code_sem5_dbms } from '../../json/code_sem5_dbms.json';
import { data as code_sem5_java } from '../../json/code_sem5_java.json';

import { data as notes_sem1 } from '../../json/notes_sem1.json';
import { data as notes_sem2 } from '../../json/notes_sem2.json';
import { data as notes_sem3_oops } from '../../json/notes_sem3_oops.json';
import { data as notes_sem3_ds } from '../../json/notes_sem3_ds.json';
import { data as notes_sem4 } from '../../json/notes_sem4.json';
import { data as notes_sem5_dbms } from '../../json/notes_sem5_dbms.json';
import { data as notes_sem5_java } from '../../json/notes_sem5_java.json';

const Sem = props => {
  const theme = useTheme()?.colors;
  const flatListRef = useRef(null);
  const isFocused = useIsFocused();
  const { title, color, lang } = props?.route?.params;
  const [selectedData, setSelectedData] = useState([]);
  const [notes, setNotes] = useState(true);
  const [code, setCode] = useState(false);
  const [quiz, setQuiz] = useState(false);
  const [notesData, setNotesData] = useState([]);
  const [codeData, setCodeData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [modal, setModal] = useState(false);
  const [langSelected, setLangSelected] = useState('');
  const [enableTimeoutModal, setEnableTimeoutModal] = useState(false);

  const closeTimeoutModal = async () => {
    // await analytics().logEvent("TimeoutModal", {
    //   button: "close",
    // });
    setEnableTimeoutModal(false);
    props?.navigation?.goBack();
  };

  const onLanguageSelection = async val => {
    // await analytics().logEvent("SemesterLanguageModal", {
    //   languageSelected: val,
    // });
    setLangSelected(val);
    if (val === 'DS') {
      setModal(false);
      setNotesData(notes_sem3_ds);
      setCodeData(code_sem3_ds);
      if (notes === true) {
        setSelectedData(notes_sem3_ds);
      } else {
        setSelectedData(code_sem3_ds);
      }
      setLoader(false);
    } else if (val === 'OOPS') {
      setModal(false);
      setNotesData(notes_sem3_oops);
      setCodeData(code_sem3_oops);
      if (notes === true) {
        setSelectedData(notes_sem3_oops);
      } else {
        setSelectedData(code_sem3_oops);
      }
      setLoader(false);
    } else if (val === 'DBMS') {
      setModal(false);
      setNotesData(notes_sem5_dbms);
      setCodeData(code_sem5_dbms);
      if (notes === true) {
        setSelectedData(notes_sem5_dbms);
      } else {
        setSelectedData(code_sem5_dbms);
      }
      setLoader(false);
    } else if (val === 'Java') {
      setModal(false);
      setNotesData(notes_sem5_java);
      setCodeData(code_sem5_java);
      if (notes === true) {
        setSelectedData(notes_sem5_java);
      } else {
        setSelectedData(code_sem5_java);
      }
      setLoader(false);
    }
  };

  const closeModal = async () => {
    // await analytics().logEvent("SemesterLanguageModal", {
    //   button: "close",
    // });
    setModal(false);
    props?.navigation?.goBack();
  };

  const LanguageSelection = props => {
    return (
      <View
        style={{
          backgroundColor: Colors?.BLACKTRANSPARENT,
          width: '100%',
          height: '100%',
        }}
      >
        <View
          style={[
            styles?.subjectModalContainer,
            {
              backgroundColor: theme?.fgColor,
            },
          ]}
        >
          <Text
            style={[
              styles?.headerStyle,
              {
                color: theme?.lightTextColor,
              },
            ]}
          >
            Select your subject:{' '}
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => closeModal()}
            style={[
              styles?.crossIconStyle,
              {
                backgroundColor: theme?.imageBG,
              },
            ]}
          >
            <Icons
              fill={theme?.imageFill}
              width={20}
              height={20}
              name={'close'}
            />
          </TouchableOpacity>

          <Card
            onCardPress={() =>
              onLanguageSelection(title === 'Semester 3' ? 'DS' : 'DBMS')
            }
            newTitle={title === 'Semester 3' ? Constants?.ds : Constants?.dbms}
            localImage={
              title === 'Semester 3'
                ? require('../../Assets/Images/ds_girl.png')
                : require('../../Assets/Images/dbms_girl.png')
            }
            side={'right'}
            bgColor={Colors?.BROWN}
            fontSize={18}
            characterSide={'left'}
            transformed={title === 'Semester 3' ? true : false}
          />

          <Card
            onCardPress={() =>
              onLanguageSelection(title === 'Semester 3' ? 'OOPS' : 'Java')
            }
            newTitle={
              title === 'Semester 3' ? Constants?.oops : Constants?.java
            }
            localImage={
              title === 'Semester 3'
                ? require('../../Assets/Images/oops_girl.png')
                : require('../../Assets/Images/java_boy.png')
            }
            side={'left'}
            bgColor={Colors?.DARKPURPLE}
            fontSize={title === 'Semester 3' ? 18 : 28}
          />
        </View>
      </View>
    );
  };

  const handleListClick = async item => {
    // await analytics().logEvent("Semester", {
    //   sem: title,
    //   click: notes === true ? "Notes" : "Code",
    // });
    if (title === 'Semester 3' || title === 'Semester 5') {
      props?.navigation?.navigate('CodeView', {
        item: item,
        navigatedFrom: notes === true ? 'Notes' : 'Code',
        screen: title,
        lang: langSelected,
      });
    } else {
      props?.navigation?.navigate('CodeView', {
        item: item,
        navigatedFrom: notes === true ? 'Notes' : 'Code',
        screen: title,
        lang: lang,
      });
    }
  };

  const fetchData = async () => {
    setLoader(true);
    if (title === 'Semester 1') {
      setModal(false);
      setNotesData(notes_sem1);
      setCodeData(code_sem1);
      if (notes === true) {
        setSelectedData(notes_sem1);
      } else {
        setSelectedData(code_sem1);
      }
      setLoader(false);
    } else if (title === 'Semester 2') {
      setModal(false);
      setNotesData(notes_sem2);
      setCodeData(code_sem2);
      if (notes === true) {
        setSelectedData(notes_sem2);
      } else {
        setSelectedData(code_sem2);
      }
      setLoader(false);
    } else if (title === 'Semester 3') {
      setModal(true);
    } else if (title === 'Semester 4') {
      setModal(false);
      setNotesData(notes_sem4);
      setCodeData(code_sem4);
      if (notes === true) {
        setSelectedData(notes_sem4);
      } else {
        setSelectedData(code_sem4);
      }
      setLoader(false);
    } else if (title === 'Semester 5') {
      setModal(true);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {
      setSelectedData([]);
      setNotesData([]);
      setCodeData([]);
    };
  }, [title]);

  const tryAgainModal = async () => {
    // await analytics().logEvent("TimeoutModal", {
    //   button: "Retry",
    //   screen: title,
    // });
    fetchData();
  };

  const handleTabButtons = async () => {
    if (notes === true && loader === false) {
      // await analytics().logEvent("Semester", {
      //   sem: title,
      //   click: "Notes",
      // });
      setSelectedData(notesData);
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    } else {
      // await analytics().logEvent("Semester", {
      //   sem: title,
      //   click: "Code",
      // });
      setSelectedData(codeData);
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  };

  const handleQuizButton = () => {
    props?.navigation?.navigate('MCQ', {
      sem: title,
    });
  };

  useEffect(() => {
    handleTabButtons();
  }, [notes, loader]);

  useEffect(() => {
    if (title === 'Semester 3' || title === 'Semester 5') {
      setNotesData([]);
      setCodeData([]);
      setSelectedData([]);
      setModal(true);
    }
  }, [props]);

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: theme?.fgColor,
      }}
    >
      {/* <Loader loader={loader} /> */}
      <Header
        navigationProp={props?.navigation}
        back={true}
        title={title}
        menu={true}
      />

      <TabContainer
        notes={notes}
        setNotes={val => setNotes(val)}
        code={code}
        setCode={val => setCode(val)}
        quiz={quiz}
        setQuiz={val => setQuiz(val)}
        color={color}
      />

      {quiz === true ? (
        <View
          style={{
            alignSelf: 'center',
            width: '90%',
            alignItems: 'center',
          }}
        >
          <Text
            style={[
              styles?.headerStyle,
              { color: theme?.textColor, textAlign: 'left' },
            ]}
          >
            BCA {title} Quickfire Quiz - Test Your Foundations in 5 Minutes!
          </Text>
          <Text
            style={[
              styles?.descriptionStyle,
              { color: theme?.textColor, textAlign: 'left' },
            ]}
          >
            Dive into this timed online quiz and assess your understanding of
            key concepts across all core subjects.
          </Text>

          <Image
            source={require('../../Assets/Images/brain.jpeg')}
            style={{
              width: 250,
              height: 250,
              borderRadius: 30,
              marginVertical: 20,
            }}
            resizeMode="contain"
          />

          <MainButton
            title={Constants?.startNow}
            mainButtonPress={() => handleQuizButton()}
          />
        </View>
      ) : (
        <FlatList
          ref={flatListRef}
          data={selectedData}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({ item, index }) => (
            <ListItems
              item={item}
              index={index}
              handleListClick={item => handleListClick(item)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 50 }}
          ListHeaderComponent={() => (
            <>
              {notes === false ? (
                <Text
                  style={[
                    styles?.disclaimerStyle,
                    {
                      color: theme?.lightTextColor,
                    },
                  ]}
                >
                  {title === 'Semester 1' ||
                  title === 'Semester 2' ||
                  title === 'Semester 3' ||
                  title === 'Semester 4'
                    ? Constants.cProgram
                    : title === 'Semester 5' && langSelected === 'DBMS'
                    ? Constants.sqlProgram
                    : title === 'Semester 5' && langSelected === 'Java'
                    ? Constants.javaProgram
                    : null}
                </Text>
              ) : null}
            </>
          )}
        />
      )}

      <Modal animationType="fade" transparent={true} visible={modal}>
        <LanguageSelection />
      </Modal>

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

export default Sem;
