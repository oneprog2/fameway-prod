import { AppNavigator } from "@navigation";
import * as React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

function App() {
  const [fontsLoaded] = useFonts({
    "Oblivian-Light": require("@assets/fonts/Oblivian/Oblivian-Light.otf"),
    "Oblivian-Regular": require("@assets/fonts/Oblivian/Oblivian-Medium.otf"),
    "Oblivian-Bold": require("@assets/fonts/Oblivian/Oblivian-Bold.otf"),
    "DM-Bold": require("@assets/fonts/DM/DM-Bold.ttf"),
    "DM-Regular": require("@assets/fonts/DM/DM-Regular.ttf"),
    "DM-Medium": require("@assets/fonts/DM/DM-Medium.ttf"),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <AppNavigator />
    </View>
  );
}

export default App;
