import React, { useRef, useState, useEffect } from 'react';

import {
  SafeAreaProvider,
  useSafeAreaInsets,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Home,
  Menubar,
  CodeView,
  Sem,
  Compiler,
  Memes,
  Blog,
  ContentView,
  Interview,
  MCQ,
  Ebooks,
  EbookPreview,
  Semester6,
  SupportUs,
} from '../Components/index';
import { Colors, Constants } from './';
import Fonts from './Fonts';
import { ThemeContext } from './ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  // const theme = useColorScheme(); // System theme (dark/light)
  const theme = 'light';

  return (
    <Drawer.Navigator
      backBehavior="history"
      drawerContent={props => <Menubar {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        drawerStyle: {
          width: '80%',
          borderBottomLeftRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: theme === 'dark' ? Colors.THEMEBLACK : Colors.WHITE,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, swipeEnabled: false }}
      />
      <Drawer.Screen
        name="CodeView"
        component={CodeView}
        options={{ headerShown: false, swipeEnabled: false }}
      />
      <Drawer.Screen
        name="Compiler"
        component={Compiler}
        options={{ headerShown: false, swipeEnabled: false }}
      />
      <Drawer.Screen
        name="Memes"
        component={Memes}
        options={{ headerShown: false, swipeEnabled: false }}
      />
      <Drawer.Screen
        name="Blog"
        component={Blog}
        options={{ headerShown: false, swipeEnabled: false }}
      />
      <Drawer.Screen
        name="ContentView"
        component={ContentView}
        options={{ headerShown: false, swipeEnabled: false }}
      />
      <Drawer.Screen
        name="Interview"
        component={Interview}
        options={{ headerShown: false, swipeEnabled: false }}
      />
      <Drawer.Screen
        name="Sem"
        component={Sem}
        options={{ headerShown: false, swipeEnabled: false }}
      />
      <Drawer.Screen
        name="MCQ"
        component={MCQ}
        options={{ headerShown: false, swipeEnabled: false }}
      />
      <Drawer.Screen
        name="Ebooks"
        component={Ebooks}
        options={{ headerShown: false, swipeEnabled: false }}
      />
      <Drawer.Screen
        name="EbookPreview"
        component={EbookPreview}
        options={{ headerShown: false, swipeEnabled: false }}
      />
      <Drawer.Screen
        name="Semester6"
        component={Semester6}
        options={{ headerShown: false, swipeEnabled: false }}
      />
      <Drawer.Screen
        name="SupportUs"
        component={SupportUs}
        options={{ headerShown: false, swipeEnabled: false }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  const insets = useSafeAreaInsets();

  const routeNameRef = useRef();
  const navigationRef = useRef();
  const [themeToggle, setThemeToggle] = useState('light');
  const [isSponsorLabelShown, setIsSponsorLabelShown] = useState(true);

  // const darkTheme = {
  //   colors: {
  //     themeType: 'dark',
  //     textColor: Colors.WHITEONE,
  //     cardText: Colors.WHITEONE,
  //     lightTextColor: Colors.THEMEWHITE,
  //     bgColor: Colors.THEMEDARKBLACK,
  //     fgColor: Colors.THEMEBLACK,
  //     background: Colors.THEMEDARKBLACK,
  //     imageBG: Colors.LIGHTGREY,
  //     imageFill: Colors.THEMEWHITE,
  //     menuBar: Colors.THEMEDARKBLACK,
  //     menuBarFill: Colors.THEMEBLACK,
  //     hamFill: Colors.BLACK,
  //     countColorUnselected: Colors.THEMEBLACK,
  //     countColorSelected: Colors.PRIMARY,
  //   },
  // };

  // const lightTheme = {
  //   colors: {
  //     themeType: 'light',
  //     textColor: Colors.BLACK,
  //     cardText: Colors.WHITEONE,
  //     lightTextColor: Colors.BLACKTRANSPARENT,
  //     bgColor: Colors.PRIMARY,
  //     fgColor: Colors.WHITEONE,
  //     background: Colors.WHITE,
  //     imageBG: Colors.LIGHTGREY,
  //     imageFill: Colors.BLACK,
  //     menuBar: Colors.THEMEWHITE,
  //     menuBarFill: Colors.VERYLIGHTGREY,
  //     hamFill: Colors.PRIMARY,
  //     countColorUnselected: Colors.WHITEONE,
  //     countColorSelected: Colors.PRIMARY,
  //   },
  // };

  const getStoredTheme = async () => {
    const themeColor = await AsyncStorage.getItem('Theme');
    setThemeToggle(themeColor || 'light');
  };

  const handleSponsorLabel = () => navigationRef.current?.navigate('SupportUs');

  const hideSponsorLabel = async () => {
    setIsSponsorLabelShown(false);
    await AsyncStorage.setItem('@SponsorLabel', 'false');
  };

  useEffect(() => {
    const checkSponsorLabel = async () => {
      const val = await AsyncStorage.getItem('@SponsorLabel');
      setIsSponsorLabelShown(val !== 'false');
    };
    checkSponsorLabel();
  }, []);

  useEffect(() => {
    getStoredTheme();
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={['right', 'left', 'bottom']}>
        {/* <NavigationContainer theme={theme}> */}
        <Stack.Navigator initialRouteName="Drawer">
          <Stack.Screen
            name="Drawer"
            component={DrawerRoutes}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CodeView"
            component={CodeView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Compiler"
            component={Compiler}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Memes"
            component={Memes}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Blog"
            component={Blog}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ContentView"
            component={ContentView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Interview"
            component={Interview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sem"
            component={Sem}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MCQ"
            component={MCQ}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Ebooks"
            component={Ebooks}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EbookPreview"
            component={EbookPreview}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        {/* </NavigationContainer> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
