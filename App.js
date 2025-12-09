// import React from 'react';
// import Routes from './src/Utils/Routes'; // Points to your Routes.js

// export default Routes;
// App.js  ← This must be your real root file (project root)
import React from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Utils/Routes'; // your navigation file
import { Colors, Fonts } from './src/Utils';

export default function App() {
  const scheme = useColorScheme();

  const theme = {
    dark: scheme === 'dark',
    colors: {
      // ← Your existing colors (keep them exactly!)
      themeType: scheme === 'dark' ? 'dark' : 'light',
      textColor: scheme === 'dark' ? Colors.WHITEONE : Colors.BLACK,
      cardText: Colors.WHITEONE,
      lightTextColor:
        scheme === 'dark' ? Colors.THEMEWHITE : Colors.BLACKTRANSPARENT,
      bgColor: scheme === 'dark' ? Colors.THEMEDARKBLACK : Colors.PRIMARY,
      fgColor: scheme === 'dark' ? Colors.THEMEBLACK : Colors.WHITEONE,
      background: scheme === 'dark' ? Colors.THEMEDARKBLACK : Colors.WHITE,
      imageBG: Colors.LIGHTGREY,
      imageFill: scheme === 'dark' ? Colors.THEMEWHITE : Colors.BLACK,
      menuBar: scheme === 'dark' ? Colors.THEMEDARKBLACK : Colors.THEMEWHITE,
      menuBarFill: scheme === 'dark' ? Colors.THEMEBLACK : Colors.VERYLIGHTGREY,
      hamFill: scheme === 'dark' ? Colors.BLACK : Colors.PRIMARY,
      countColorUnselected:
        scheme === 'dark' ? Colors.THEMEBLACK : Colors.WHITEONE,
      countColorSelected: Colors.PRIMARY,

      // ADD THESE 4 LINES — THIS FIXES THE ERROR FOREVER
      primary: Colors.PRIMARY,
      card: scheme === 'dark' ? Colors.THEMEBLACK : Colors.WHITE,
      text: scheme === 'dark' ? Colors.WHITEONE : Colors.BLACK,
      border: scheme === 'dark' ? '#333' : '#ddd',
    },
    fonts: {
      regular: Fonts.regular, // Your regular font
      medium: Fonts.medium, // Your medium font
      light: Fonts.light, // Your light font (if you have it)
      thin: Fonts.thin, // Optional
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
