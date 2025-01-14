import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Button,
  Linking,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import Toast from "react-native-toast-message";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useAudioPlayer } from "expo-audio";

const FinalGeneratedSpeech = () => {
  const { url } = useLocalSearchParams();
  const player = useAudioPlayer(url as string);
  console.log(url);
  const ANDROID_DEVICE = Platform.OS === "android";
  const handleDownloadAudio = async () => {
    try {
      const timestamp = new Date().getTime();

      const fileUrl =
        FileSystem.documentDirectory + `audioFile_${timestamp}.mp3`;
      await FileSystem.downloadAsync(url as string, fileUrl);

      Toast.show({
        type: "success",
        text1: "Audio Download Successfully ✅",
      });
      // Linking.openURL(url as string);
    } catch (error) {
      console.log("something went wrong:", error.message);
      Toast.show({
        type: "error",
        text1: "Failed to download the audio ❌",
      });
    }
  };
  return (
    <LinearGradient
      colors={["#5e35b1", "#673ab7", "#ab47bc"]}
      style={{ flex: 1, height: "100%", width: "100%", paddingHorizontal: 8 }}
    >
      <SafeAreaView className="h-full">
        {/* Top Image */}
        <Image
          source={require("@/assets/images/audio-file.png")}
          className={` ${ANDROID_DEVICE && "mt-12"} w-full h-80 p-8`}
          resizeMode="contain"
        />
        {/*  <TouchableOpacity
          onPress={() => player.play()}
          className="bg-blue-500 rounded-2xl mt-9 py-5 px-9"
        >
          <Text className="text-white text-xl font-semibold text-center">
            Play Sound
          </Text>
        </TouchableOpacity>  */}
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute top-14 left-4 bg-black/30 w-12 h-12 items-center justify-center rounded-full"
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleDownloadAudio}
          className="  py-5 absolute bottom-12  mt-3 px-3 rounded-full w-full justify-center self-center"
        >
          <LinearGradient
            colors={["#5e35b1", "#673ab7", "#ab47bc"]}
            start={{ x: 0.2, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: "100%",
              paddingVertical: 15,
              paddingHorizontal: 5,
              marginTop: "30%",
              borderRadius: 50,
            }}
          >
            <View className=" flex flex-row items-center justify-center gap-x-1">
              <AntDesign name="download" size={24} color="white" />
              <Text className="text-white font-bold capitalize text-center text-xl">
                {" "}
                Download
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <Toast />
      </SafeAreaView>
      <StatusBar backgroundColor="#5e35b1" style="light" />
    </LinearGradient>
  );
};

export default FinalGeneratedSpeech;
