import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../app/assets/fonts/SpaceMono-Regular.ttf'),
          'CharterBold': require('../app/assets/fonts/CharterBold.otf'),
          'CharterBoldItalic': require('../app/assets/fonts/CharterBoldItalic.otf'),
          'CharterItalic': require('../app/assets/fonts/CharterItalic.otf'),
          'CharterRegular': require('../app/assets/fonts/CharterRegular.otf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
