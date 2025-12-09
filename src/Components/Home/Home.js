import React, { useEffect, useState, useRef } from 'react';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  Linking,
  FlatList,
  Share,
  Alert,
  ToastAndroid,
  BackHandler,
  Modal,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
// import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import moment from 'moment';
import getMethod from '../../api/getAPI';
import styles from './styles';
// import SplashScreen from "react-native-splash-screen";

import { Header, Card, MainButton, Icons } from '../../CommonComponents/index';
import { Colors, Constants } from '../../Utils';
import Fonts from '../../Utils/Fonts';
// import Carousel from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// import analytics from '@react-native-firebase/analytics';
import RBSheet from 'react-native-raw-bottom-sheet';
// import Rate, { AndroidMarket } from 'react-native-rate';
import CarouselCardItem from './CarouselCardItem';
import { useTheme, useIsFocused } from '@react-navigation/native';
// import { ThemeContext } from '../../Utils/ThemeContext';
// import DeviceInfo from 'react-native-device-info';
// import crashlytics from '@react-native-firebase/crashlytics';

const Home = props => {
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused();
  // const { themeToggle, setThemeToggle } = React.useContext();
  const scheme = useColorScheme();
  const { themeToggle, setThemeToggle } = useState(scheme);
  const theme = useTheme()?.colors;
  const bottomSheetRef = useRef();
  // const options = {
  //   GooglePackageName: 'technark.bca_courprogramming',
  //   OtherAndroidURL:
  //     'https://play.google.com/store/apps/details?id=technark.bca_courprogramming',
  //   preferredAndroidMarket: AndroidMarket.Google,
  //   preferInApp: true,
  //   openAppStoreIfInAppFails: false,
  //   fallbackPlatformURL:
  //     'https://play.google.com/store/apps/details?id=technark.bca_courprogramming',
  // };

  const screenHeight = Dimensions.get('window').height;
  const isCarousel = useRef(null);
  const width = Dimensions.get('window').width;
  const [exitApp, setExitApp] = useState(0);

  const [randomeNum, setRandomeNum] = useState();
  const [randomData, setRandomData] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [newNotifications, setNewNotifications] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);
  const [forcedUpdate, setForcedUpdate] = useState(false);
  const [updateData, setUpdateData] = useState([]);

  const onShare = async () => {
    try {
      await Share.share({
        message: `${Constants.sharingMessage} \n${Constants.urls?.googlePlayBCA}`,
      });
    } catch (error) {
      // crashlytics().recordError(error);
    }
  };

  const handleCardClick = async val => {
    // await analytics().logEvent('Home', {
    //   screen: val,
    // });
    if (val === 'Sem1') {
      props?.navigation?.navigate('Sem', {
        title: 'Semester 1',
        lang: 'c',
      });
    } else if (val === 'Sem2') {
      props?.navigation?.navigate('Sem', {
        title: 'Semester 2',
        lang: 'c',
      });
    } else if (val === 'Sem3') {
      props?.navigation?.navigate('Sem', {
        title: 'Semester 3',
        lang: 'c',
      });
    } else if (val === 'Sem4') {
      props?.navigation?.navigate('Sem', {
        title: 'Semester 4',
        lang: 'c',
      });
    } else if (val === 'Sem5') {
      props?.navigation?.navigate('Sem', {
        title: 'Semester 5',
        lang: 'java',
      });
    } else if (val === 'Sem6') {
      props?.navigation?.navigate('Semester6', {
        title: 'Semester 6',
      });
    } else if (val === 'Compiler') {
      props?.navigation?.navigate('Compiler', {
        title: 'Compiler',
      });
    } else if (val === 'Memes') {
      props?.navigation?.navigate('Memes', {
        title: 'Memes',
      });
    } else if (val === 'Interview') {
      props?.navigation?.navigate('Interview', {
        title: 'Interview Questions',
      });
    } else if (val === 'Blog') {
      props?.navigation?.navigate('Blog', {
        title: Constants?.careerGuidance,
      });
    } else if (val === 'RateUs') {
      Linking.openURL(Constants?.urls?.googlePlayBCA);
    } else if (val === 'Share') {
      onShare();
    } else if (val === 'Ebooks') {
      props?.navigation?.navigate('Ebooks');
    } else if (val === 'Contribute') {
      props?.navigation?.navigate('SupportUs');
    }
  };

  // const getInstallationDay = async () => {
  //   const currentDate = new Date();
  //   const installationDate = await AsyncStorage.getItem('InstallationDate');
  //   if (installationDate !== null && installationDate !== undefined) {
  //     const diffInMs =
  //       new Date(currentDate) - new Date(JSON.parse(installationDate));
  //     const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  //     const days = diffInDays.toFixed(0);

  //     if (days >= 3) {
  //       Rate.rate(options, (success, errorMessage) => {
  //         if (success) {
  //         }
  //         if (errorMessage) {
  //           const showLocalReviewModal = async () => {
  //             const getReviewValue = await AsyncStorage?.getItem('Review');
  //             if (
  //               getReviewValue === '0' ||
  //               getReviewValue === undefined ||
  //               getReviewValue === null
  //             ) {
  //               setReviewModal(true);
  //             } else {
  //               setReviewModal(false);
  //             }
  //           };

  //           showLocalReviewModal();
  //         }
  //       });
  //     }
  //   } else {
  //     await AsyncStorage.setItem(
  //       'InstallationDate',
  //       JSON.stringify(currentDate),
  //     );
  //   }
  // };

  const handleCarouselClick = async item => {
    // await analytics().logEvent('Home', {
    //   bannerType: item?.type,
    // });
    if (item?.type === Constants?.careerGuidance) {
      props?.navigation?.navigate('ContentView', {
        title: item?.type,
        blogTitle: item?.title,
        content: item?.content,
        img: item?.img,
      });
    } else if (item?.type === Constants?.interviewQuestion) {
      props?.navigation?.navigate('ContentView', {
        title: item?.type,
        blogTitle: item?.title,
        content: item?.content,
        img: item?.img,
      });
    }
  };

  // const CarouselCardItem = ({ item, index }) => {
  //   return (
  //     <TouchableOpacity
  //       onPress={() => handleCarouselClick(item)}
  //       style={{ flex: 1 }}
  //     >
  //       <ImageBackground
  //         source={{
  //           uri: item?.img ? item?.img : Constants?.urls?.placeholderImage,
  //         }}
  //         imageStyle={{
  //           borderRadius: 10,
  //           borderColor: Colors?.BLACKTRANSPARENT2,
  //           borderWidth: 0.1,
  //         }}
  //         resizeMode="cover"
  //         style={{
  //           flex: 1,
  //           // height: 250,
  //           height: 200,
  //           justifyContent: "flex-end",
  //         }}
  //         key={index}
  //       >
  //         <Text numberOfLines={1} style={styles.alertHeader}>
  //           {item?.type}
  //         </Text>
  //         <Text numberOfLines={2} style={styles.header}>
  //           {item?.title}
  //         </Text>
  //       </ImageBackground>
  //     </TouchableOpacity>
  //   );
  // };

  const getRandomData = async () => {
    const tipResponse = await getMethod(Constants?.urls?.guidance);
    const interviewResponse = await getMethod(Constants?.urls?.interview);

    const randomTip = Math.floor(
      Math.random() * tipResponse?.data?.guidance?.length,
    );

    const randomInterView = Math.floor(
      Math.random() * interviewResponse?.data?.interview?.length,
    );

    setRandomData([
      {
        ...tipResponse?.data?.guidance[randomTip],
        type: Constants?.careerGuidance,
      },
      {
        ...interviewResponse?.data?.interview[randomInterView],
        type: Constants?.interviewQuestion,
      },
    ]);
  };

  const rateNow = async () => {
    // await analytics().logEvent('RateUsModal', {
    //   button: 'RateNow',
    // });
    await AsyncStorage?.setItem('Review', '1');
    Linking?.openURL(Constants?.urls?.googlePlayBCA);
    setReviewModal(false);
  };

  const RateReviewModal = () => {
    return (
      <View
        style={{
          backgroundColor: Colors?.BLACKTRANSPARENT,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <View
          style={[
            styles?.modalContainer,
            {
              backgroundColor: theme?.fgColor,
            },
          ]}
        >
          <Text
            style={[
              styles?.modalTitle,
              {
                color: theme?.textColor,
              },
            ]}
          >
            Your opinion matters to us!
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => closeModal('RateUsModal')}
            style={[
              styles?.closeIconStyle,
              {
                backgroundColor: theme?.imageBG,
                top: 20,
                right: 10,
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

          <Image
            style={styles?.modalImage}
            source={{ uri: Constants?.urls?.rate }}
          />

          <Text
            style={[
              styles?.ratingDesc,
              {
                color: theme?.textColor,
              },
            ]}
          >
            {Constants?.ratingMessage}
          </Text>

          <MainButton title="Rate Now" mainButtonPress={() => rateNow()} />
        </View>
      </View>
    );
  };

  const updateNow = async () => {
    // await analytics().logEvent('UpdateModal', {
    //   button: 'Download',
    // });
    Linking?.openURL(Constants?.urls?.googlePlayBCA);
    setUpdateModal(false);
  };

  const closeModal = async val => {
    // await analytics().logEvent(val, {
    //   button: 'Close',
    // });
    if (val === 'RateUsModal') {
      setReviewModal(false);
      await AsyncStorage?.setItem('Review', '1');
    } else if (val === 'UpdateModal') {
      setUpdateModal(false);
    }
  };

  const RenderUpdateList = item => {
    return (
      <View>
        <Text
          style={[
            styles?.updateFeatureStyle,
            {
              color: theme?.textColor,
            },
          ]}
        >
          {item?.feat}
        </Text>
      </View>
    );
  };

  const VersionUpdateModal = () => {
    return (
      <View
        style={{
          backgroundColor: Colors?.BLACKTRANSPARENT,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <View
          style={[
            styles?.modalContainer,
            {
              backgroundColor: theme?.fgColor,
            },
          ]}
        >
          <Text
            style={[
              styles?.modalTitle,
              {
                color: theme?.textColor,
              },
            ]}
          >
            New Update Available!
          </Text>

          {forcedUpdate === true ? null : (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => closeModal('UpdateModal')}
              style={[
                styles?.closeIconStyle,
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
          )}

          <Image
            style={[styles?.modalImage, { width: 90, height: 90 }]}
            source={{ uri: Constants?.urls?.updated }}
          />

          <FlatList
            data={updateData?.features}
            renderItem={({ item }) => RenderUpdateList(item)}
          />

          <MainButton title="Update Now" mainButtonPress={() => updateNow()} />

          {forcedUpdate === false ? null : (
            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
              }}
            >
              <Image
                style={{ width: 25, height: 25 }}
                source={require('../../Assets/Images/warning.png')}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: Fonts?.poppinsRegular,
                  color: Colors?.RED,
                  width: '95%',
                }}
              >
                {Constants?.forceUpdateMessage}
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  // const getUpdateData = async () => {
  //   const apiResponse = await axios.get(Constants?.urls?.version);
  //   if (apiResponse?.status === 200) {
  //     const versionName = DeviceInfo.getBuildNumber();
  //     if (apiResponse?.data?.latestVersion > versionName) {
  //       setUpdateData(apiResponse?.data);
  //       setUpdateModal(true);
  //       if (
  //         apiResponse?.data?.oldestVersion >= versionName &&
  //         apiResponse?.data?.forced === true
  //       ) {
  //         setForcedUpdate(true);
  //       } else {
  //         setForcedUpdate(false);
  //       }
  //     }
  //   }
  // };

  const getNotificationsData = async () => {
    const notificationTime = await AsyncStorage?.getItem('NotificationTime');
    const response = await getMethod(Constants?.urls?.notifications);
    if (response?.status === 200) {
      setNotifications(response?.data);

      if (notificationTime == null || notificationTime == undefined) {
        await AsyncStorage?.setItem(
          'NotificationTime',
          response?.data[0]?.date,
        );
      } else {
        if (response?.data[0]?.date > notificationTime) {
          setNewNotifications(true);
          await AsyncStorage?.setItem(
            'NotificationTime',
            response?.data[0]?.date,
          );
        } else {
          setNewNotifications(false);
          await AsyncStorage?.setItem(
            'NotificationTime',
            response?.data[0]?.date,
          );
        }
      }
    }
  };

  const bellIconButton = async () => {
    // await analytics().logEvent('Header', {
    //   button: 'Open_Notifications',
    // });
    setNewNotifications(false);
    bottomSheetRef?.current?.open();
  };

  const onPressNotificationNavigation = async url => {
    // await analytics().logEvent('Header', {
    //   button: 'NotificationsCTA',
    // });
    Linking?.openURL(url);
  };

  const NotificationsList = (item, index) => {
    return (
      <View
        style={[
          styles?.notificationsContainer,
          {
            marginBottom: index === notifications?.length - 1 ? 50 : null,
            backgroundColor: theme?.background,
          },
        ]}
      >
        {item?.date ? (
          <Text
            style={[
              styles?.dateStyle,
              {
                color: theme?.textColor,
              },
            ]}
          >
            {moment(item?.date).format('DD MMM, hh:mm A')}
          </Text>
        ) : null}

        {item?.header ? (
          <Text
            style={[
              styles?.headerStyle,
              {
                color: theme?.textColor,
              },
            ]}
          >
            {item?.header}
          </Text>
        ) : null}

        {item?.desc ? (
          <Text
            style={[
              styles?.contentStyle,
              {
                color: theme?.textColor,
              },
            ]}
          >
            {item?.desc}
          </Text>
        ) : null}

        {item?.img ? (
          <Image
            style={styles?.imageStyle}
            resizeMode="contain"
            source={{ uri: item?.img }}
          />
        ) : null}

        {item?.button ? (
          <MainButton
            buttonWidth={'50%'}
            title={item?.button}
            mainButtonPress={() => onPressNotificationNavigation(item?.url)}
          />
        ) : null}
      </View>
    );
  };

  const NewsInformation = () => {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: theme?.fgColor,
        }}
      >
        <FlatList
          data={notifications}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({ item, index }) => NotificationsList(item, index)}
        />
      </View>
    );
  };

  const getStoredTheme = async () => {
    const themeColor = await AsyncStorage?.getItem('Theme');
    setThemeToggle(themeColor);
  };

  // Method is executed every time user starts a session
  const secondMethod = () => {
    getStoredTheme();
    // LoadQuote();
    getRandomData();

    // SplashScreen.hide();

    // getUpdateData();
    // getGlotToken();
    getNotificationsData();
    // checkNotificationsPermission();
    // getInstallationDay();
  };

  const goToSettings = () => {
    Alert.alert(
      Constants?.permissionDenied,
      Constants?.allowNotificationsPermission,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => Linking.openSettings() },
      ],
    );
  };

  // const checkNotificationsPermission = async () => {
  //   if (Platform.OS === 'android' && Platform.Version >= 34) {
  //     check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then(async result => {
  //       if (result === 'granted') {
  //       } else if (result === 'denied') {
  //         await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS).then(result => {
  //           if (result == 'granted') {
  //           } else if (result == 'blocked') {
  //             goToSettings();
  //           }
  //         });
  //       }
  //     });
  //   }
  // };

  useEffect(() => {
    secondMethod();
  }, []);

  const backAction = () => {
    setTimeout(() => {
      setExitApp(0);
    }, 2000); // 2 seconds to tap second-time

    if (exitApp === 0) {
      setExitApp(exitApp + 1);

      ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
    } else if (exitApp === 1) {
      BackHandler.exitApp();
    }
    return true;
  };
  useEffect(() => {
    if (isFocused === true) {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }
  });

  // useEffect(() => {
  //   const firstMethod = async () => {
  //     const privacy = await AsyncStorage?.getItem("PrivacyPolicy");
  //     if (privacy === null || privacy === undefined || privacy === "") {
  //       concentBottomSheetRef?.current?.open();
  //     } else {
  //       secondMethod();
  //     }
  //   };

  //   firstMethod();
  // }, []);

  // useEffect(() => {
  //   getGlotToken();
  //   getNotificationsData();
  //   checkNotificationsPermission();
  //   getInstallationDay();
  // }, []);

  return (
    <SafeAreaView
    // style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}
    // edges={['right', 'left', 'bottom']}
    >
      <Header
        navigationProp={props.navigation}
        title={Constants?.appName}
        menu={true}
        bell={notifications?.length > 0 ? true : false}
        bellIconButton={() => bellIconButton()}
        newNotifications={newNotifications}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          styles.mainContainer,
          {
            backgroundColor: theme?.fgColor,
          },
        ]}
      >
        {/* <LoadQuote /> */}
        {/* <View style={[styles?.quoteContainer, { width: ITEM_WIDTH }]}>
          <Text
            style={
              theme === "dark" ? styles?.quoteTextDark : styles?.quoteTextLight
            }
          >
            {Strings?.quotes[randomeNum]?.quote}
          </Text>
        </View> */}

        {/* <View style={{ marginVertical: 10, height: 200 }}>
          <Carousel
            layout="default"
            ref={isCarousel}
            data={randomData}
            renderItem={({ item, index }) => (
              <CarouselCardItem
                item={item}
                index={index}
                handleCarouselClick={val => handleCarouselClick(val)}
              />
            )}
            sliderWidth={width}
            itemWidth={width - 30}
            useScrollView={false}
            autoplay={true}
            loop={true}
          />
        </View> */}

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignSelf: 'center',
            width: '90%',
            justifyContent: 'space-between',
          }}
        >
          <Card
            onCardPress={() => handleCardClick('Sem1')}
            titleNum={'1'}
            title={Constants?.st}
            localImage={require('../../Assets/Images/fifthGirl.png')}
            side={'bottom'}
            bgColors={Colors?.PURPLE}
            bgColor={
              theme?.themeType === 'dark'
                ? Colors?.THEMEDARKBLACK
                : Colors?.BROWN
            }
          />

          <Card
            onCardPress={() => handleCardClick('Sem2')}
            titleNum={'2'}
            title={Constants?.nd}
            localImage={require('../../Assets/Images/secondBoy.png')}
            side={'bottom'}
            bgColors={Colors?.LIGHTGREEN}
            bgColor={
              theme?.themeType === 'dark'
                ? Colors?.THEMEDARKBLACK
                : Colors?.DARKPURPLE
            }
          />

          <Card
            onCardPress={() => handleCardClick('Sem3')}
            titleNum={'3'}
            title={Constants?.rd}
            localImage={require('../../Assets/Images/fourthGirl.png')}
            side={'bottom'}
            transformed={true}
            bgColors={Colors?.BROWN}
            bgColor={
              theme?.themeType === 'dark'
                ? Colors?.THEMEDARKBLACK
                : Colors?.DARKPURPLE
            }
          />

          <Card
            onCardPress={() => handleCardClick('Sem4')}
            titleNum={'4'}
            title={Constants?.th}
            localImage={require('../../Assets/Images/secondGirl.png')}
            side={'bottom'}
            bgColors={Colors?.DARKBLUE}
            bgColor={
              theme?.themeType === 'dark'
                ? Colors?.THEMEDARKBLACK
                : Colors?.BROWN
            }
          />

          <Card
            onCardPress={() => handleCardClick('Sem5')}
            titleNum={'5'}
            title={Constants?.th}
            localImage={require('../../Assets/Images/firstMan.png')}
            side={'bottom'}
            bgColors={Colors?.LIGHTBLUEONE}
            bgColor={
              theme?.themeType === 'dark'
                ? Colors?.THEMEDARKBLACK
                : Colors?.BROWN
            }
          />

          <Card
            onCardPress={() => handleCardClick('Sem6')}
            titleNum={'6'}
            title={Constants?.th}
            transformed={true}
            localImage={require('../../Assets/Images/sixthMan.png')}
            side={'bottom'}
            bgColors={Colors?.LIGHTGREEN}
            bgColor={
              theme?.themeType === 'dark'
                ? Colors?.THEMEDARKBLACK
                : Colors?.DARKPURPLE
            }
          />

          {/* <Card
            onCardPress={() => handleCardClick('Ebooks')}
            newTitle={Constants?.ebooks}
            localImage={require('../../Assets/Images/ebook_girl.png')}
            side={'bottom'}
            transformed={true}
            bgColors={Colors?.BROWN}
            bgColor={
              theme?.themeType === 'dark'
                ? Colors?.THEMEDARKBLACK
                : Colors?.DARKPURPLE
            }
          />

          <Card
            onCardPress={() => handleCardClick('Memes')}
            newTitle={Constants?.memes}
            localImage={require('../../Assets/Images/meme_boy.png')}
            side={'bottom'}
            bgColors={Colors?.LIGHTBLUEONE}
            bgColor={
              theme?.themeType === 'dark'
                ? Colors?.THEMEDARKBLACK
                : Colors?.BROWN
            }
          /> */}

          <Card
            onCardPress={() => handleCardClick('Interview')}
            newTitle={Constants?.interviewQuestions}
            localImage={require('../../Assets/Images/interview_girl.png')}
            side={'bottom'}
            bgColors={Colors?.DARKBLUE}
            bgColor={
              theme?.themeType === 'dark'
                ? Colors?.THEMEDARKBLACK
                : Colors?.BROWN
            }
          />

          <Card
            onCardPress={() => handleCardClick('Blog')}
            newTitle={Constants?.guidance}
            localImage={require('../../Assets/Images/blog_girl.png')}
            side={'bottom'}
            transformed={true}
            bgColors={Colors?.LIGHTBLUEONE}
            bgColor={
              theme?.themeType === 'dark'
                ? Colors?.THEMEDARKBLACK
                : Colors?.DARKPURPLE
            }
          />

          <Card
            onCardPress={() => handleCardClick('Compiler')}
            newTitle={Constants?.compiler}
            localImage={require('../../Assets/Images/compiler_boy.png')}
            side={'bottom'}
            bgColors={Colors?.DARKBLUE}
            bgColor={
              theme?.themeType === 'dark'
                ? Colors?.THEMEDARKBLACK
                : Colors?.THEMEDARKBLACK
            }
          />

          <Card
            onCardPress={() => handleCardClick('RateUs')}
            newTitle={Constants?.rateUs}
            localImage={require('../../Assets/Images/rateus_boy.png')}
            side={'bottom'}
            bgColors={Colors?.DARKBLUE}
            bgColor={
              theme?.themeType === 'dark'
                ? Colors?.THEMEDARKBLACK
                : Colors?.BROWN
            }
          />

          <Card
            onCardPress={() => handleCardClick('Share')}
            newTitle={Constants?.shareWithFriends}
            localImage={require('../../Assets/Images/share_triplet.png')}
            side={'bottom'}
            bgColors={Colors?.DARKBLUE}
            bgColor={
              theme?.themeType === 'dark'
                ? Colors?.THEMEDARKBLACK
                : Colors?.BROWN
            }
          />

          <Card
            onCardPress={() => handleCardClick('Contribute')}
            newTitle={Constants?.contribute}
            localImage={require('../../Assets/Images/recommendations_boy.png')}
            side={'bottom'}
            bgColors={Colors?.DARKBLUE}
            bgColor={
              theme?.themeType === 'dark'
                ? Colors?.THEMEDARKBLACK
                : Colors?.THEMEDARKBLACK
            }
          />
        </View>

        <View style={styles?.textContainer}>
          <Text
            style={[
              styles?.developedTextStyle,
              {
                color: theme?.textColor,
              },
            ]}
          >
            {Constants?.developedIn}
          </Text>
          <Text
            style={[
              styles?.developedTextStyle,
              {
                color: theme?.textColor,
                fontFamily: Fonts?.poppinsBold,
              },
            ]}
          >
            {' '}
            {Constants?.bharat}
          </Text>
        </View>

        <View style={{ height: 50 }} />
      </ScrollView>

      <RBSheet
        ref={bottomSheetRef}
        height={screenHeight * 0.6}
        openDuration={250}
        closeOnDragDown={true}
        dragFromTopOnly={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme?.fgColor,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          draggableIcon: {
            backgroundColor: Colors?.BLACK,
            marginTop: 50,
          },
        }}
      >
        <NewsInformation />
      </RBSheet>

      <Modal animationType="fade" transparent={true} visible={updateModal}>
        <VersionUpdateModal />
      </Modal>

      <Modal animationType="fade" transparent={true} visible={reviewModal}>
        <RateReviewModal />
      </Modal>
    </SafeAreaView>
  );
};

export default Home;
