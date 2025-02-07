import { useFonts } from "expo-font";
import "../global.css";
import { Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  // prevent auto hiding async splash screen
  SplashScreen.preventAutoHideAsync();
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  // load the fonts
  const [loaded] = useFonts({
    Roboto: require("@/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("@/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("@/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Black": require("@/assets/fonts/Roboto-Black.ttf"),
    "Roboto-ExtraBold": require("@/assets/fonts/Roboto-ExtraBold.ttf"),
    "Roboto-SemiBold": require("@/assets/fonts/Roboto-SemiBold.ttf"),
    "Roboto-Thin": require("@/assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Light": require("@/assets/fonts/Roboto-Light.ttf"),
    "Roboto-ExtraLight": require("@/assets/fonts/Roboto-ExtraLight.ttf"),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded)
    return (
      <Image
        source={require("../assets/images/splash.png")}
        className="w-full h-full"
        resizeMode="cover"
      />
    );
  return (
    <GestureHandlerRootView>
      <Slot />
    </GestureHandlerRootView>
  );
}
