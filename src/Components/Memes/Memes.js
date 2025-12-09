import React, { useState, useEffect } from 'react';
import { Alert, ToastAndroid, Linking, View, Modal, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import RNFetchBlob from 'rn-fetch-blob';
import getMethod from '../../api/getAPI';
// import Swiper from 'react-native-deck-swiper';
// import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { Header, Loader, TimeoutModal } from '../../CommonComponents';
import { Constants } from '../../Utils';
import { useIsFocused } from '@react-navigation/native';
import MemesSwiper from './MemesSwiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Share from 'react-native-share';
// import ReactNativeBlobUtil from 'react-native-blob-util';
// import analytics from "@react-native-firebase/analytics";
import { useTheme } from '@react-navigation/native';

const Memes = props => {
  const theme = useTheme()?.colors;
  const { title } = props?.route?.params;
  const isFocused = useIsFocused();
  const [swipeGif, setSwipeGIF] = useState(false);
  const [loader, setLoader] = useState(true);
  const [memesData, setMemesData] = useState([]);
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
    getMemesData();
  };

  const getMemesData = async () => {
    setLoader(true);
    const response = await getMethod(Constants?.urls?.memes);
    if (response?.status === 200) {
      setMemesData(response?.data?.memes.sort(() => Math.random() - 0.5));
      setEnableTimeoutModal(false);
      const swipeDone = await AsyncStorage?.getItem('SwipeDone');
      if (swipeDone) {
        setSwipeGIF(false);
      } else {
        setSwipeGIF(true);
      }
    }
    // else if (notesResponse == 'ERR_CANCELED') {
    //   setEnableTimeoutModal(true);
    // }
    setLoader(false);
  };

  useEffect(() => {
    getMemesData();
  }, []);

  const goToSettings = async () => {
    // await analytics().logEvent("Memes", {
    //   button: "GoToSettings",
    // });
    Alert.alert(
      Constants?.permissionDenied,
      Constants?.allowDownloadPermission,
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

  // const initiateDownload = async url => {
  //   RNFetchBlob.config({
  //     fileCache: true,
  //     appendExt: 'jpg',
  //   })
  //     .fetch('GET', url)
  //     .then(res => {
  //       CameraRoll.save(res.path())
  //         .then(
  //           // Alert.alert("Success", "Photo added to camera roll!")
  //           ToastAndroid.show(
  //             Constants?.savedImage,
  //             ToastAndroid.SHORT,
  //             ToastAndroid.BOTTOM,
  //           ),
  //         )
  //         .catch(err => console.log('err:', err));
  //     });
  // };

  const sharePhoto = async url => {
    // await analytics().logEvent("Memes", {
    //   button: "Share",
    // });
    // ReactNativeBlobUtil.fetch('GET', url)
    //   .then(res => {
    //     let status = res.info().status;
    //     if (status === 200) {
    //       let base64Str = res.base64();
    //       let options = {
    //         url: `data:image/jpeg;base64,${base64Str}`,
    //         message: `Check this out, I found it on BCA - Course Programming.\n${Constants?.urls?.googlePlayBCA}`,
    //       };
    //       // Share.open(options)
    //       //   .then(r => {
    //       //     console.log(r);
    //       //   })
    //       //   .catch(e => {
    //       //     e && console.log(e);
    //       //   });
    //     } else {
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  // const downloadPhoto = url => {
  //   check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
  //     .then(result => {
  //       switch (result) {
  //         case RESULTS.UNAVAILABLE:
  //           break;
  //         case RESULTS.DENIED:
  //           request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then(result => {
  //             if (result == 'granted') {
  //               initiateDownload(url);
  //             } else if (result == 'blocked') {
  //               goToSettings();
  //             }
  //           });
  //           break;
  //         case RESULTS.LIMITED:
  //           console.log('The permission is limited: some actions are possible');
  //           break;
  //         case RESULTS.GRANTED:
  //           console.log('The permission is granted').then(result => {
  //             console.log('result', result);
  //             // initiateDownload(url);
  //           });
  //           // CameraRoll.save(url, { type: "photo", album: "DCIM" });
  //           //   .then((onfulfilled) => {
  //           //     ToastAndroid.show(onfulfilled, ToastAndroid.SHORT);
  //           //   })
  //           //   .catch((error) => {
  //           //     ToastAndroid.show(`${error.message}`, ToastAndroid.SHORT);
  //           //   });

  //           break;
  //         case RESULTS.BLOCKED:
  //           goToSettings();
  //           break;
  //       }
  //     })
  //     .catch(error => {
  //       // …
  //     });
  // };

  // const renderGalleryView = (item, index) => {
  //   console.log("what", index);

  //   return (
  //     <View
  //       style={{
  //         backgroundColor: Colors?.WHITE,
  //         paddingHorizontal: 10,
  //         width: "95%",
  //         // height: 600,
  //         marginVertical: 20,
  //         // height: "70%",
  //         alignSelf: "center",
  //         justifyContent: "center",
  //         alignContent: "center",
  //         alignItems: "center",
  //         borderRadius: 10,
  //       }}
  //     >
  //       <Image
  //         resizeMode="contain"
  //         style={{
  //           width: "100%",
  //           height: 400,
  //         }}
  //         source={{ uri: item?.meme }}
  //       />

  //       <TouchableOpacity
  //         onPress={() => downloadPhoto(item?.meme)}
  //         style={{
  //           backgroundColor: Colors?.PRIMARY,
  //           paddingHorizontal: 10,
  //           paddingVertical: 5,
  //           borderRadius: 5,
  //           marginVertical: 10,
  //         }}
  //       >
  //         <Text
  //           style={{
  //             color: Colors?.WHITE,
  //             fontFamily: Fonts?.poppinsMedium,
  //             fontSize: 14,
  //           }}
  //         >
  //           {Constants?.saveToGallery}
  //         </Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };

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
      <View
        style={{
          justifyContent: 'center',
          // top: "30%",
        }}
      >
        {/* <Swiper
          infinite={true}
          cards={memesData}
          cardIndex={0}
          stackSize={3}
          swipeAnimationDuration={100}
          renderCard={card =>
            card !== undefined ? (
              <MemesSwiper
                card={card}
                downloadPhoto={val => downloadPhoto(val)}
                sharePhoto={val => sharePhoto(val)}
              />
            ) : null
          }
          onSwiped={() => {
            setSwipeGIF(false);
            AsyncStorage?.setItem('SwipeDone', 'true');
          }}
        /> */}
      </View>

      {swipeGif === true ? (
        <Image
          style={{
            width: 60,
            height: 60,
            left: '45%',
            position: 'absolute',
            bottom: '25%',
          }}
          source={require('../../Assets/Images/swipeLeft.gif')}
        />
      ) : null}

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

      {/* <FlatList
        data={memesData}
        renderItem={({ item, index }) => (
          // renderGalleryView(item, index)
          <MemesFlatList
            item={item}
            index={index}
            downloadPhoto={(val) => downloadPhoto(val)}
          />
        )}
        // keyExtractor={(index) => "key" + index}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={5}
        contentContainerStyle={{ paddingBottom: 150 }}
      /> */}
    </SafeAreaView>
  );
};

export default Memes;
