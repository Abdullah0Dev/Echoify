import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";
import { Slot } from "expo-router"; 

export default function Layout() { 
  return (
    <GestureHandlerRootView>
      <Slot />
    </GestureHandlerRootView>
  );
}
