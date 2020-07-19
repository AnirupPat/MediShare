import React, { useState } from 'react';
import AppNavigation from './src/index';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { CoreReduxInitialState } from './src/store/core/data';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Constants from './src/commons/constants';
import { enableScreens } from 'react-native-screens';

enableScreens()

const fetchFonts = () => {
  return Font.loadAsync(Constants.FONTS);
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
            />
        );
    }

  return (
    <Provider store={store}>
      <AppNavigation core={CoreReduxInitialState} />
    </Provider>
  );
}
