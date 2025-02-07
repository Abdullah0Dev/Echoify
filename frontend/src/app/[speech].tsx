import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import Toast from "react-native-toast-message";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Audio } from "expo-av";
import { SharedObject } from "expo";
const FinalGeneratedSpeech = () => {
  const { url } = useLocalSearchParams();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = async () => {
    if (isPlaying) {
      await sound?.pauseAsync();
      setIsPlaying(false);
    } else {
      if (!sound) {
        const { sound: newSound } = await Audio.Sound.createAsync({
          uri: url as string,
        });
        setSound(newSound);
        await newSound.playAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(true);
    }
  };

  const handleStop = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
    }
  };

  const handleDownloadAudio = async () => {
    try {
      // const filename = "dummy.mp4";
      // const result = await FileSystem.downloadAsync('http://somesite.com/', FileSystem.documentDirectory + filename);

      // // Log the download result
      // console.log(result);

      // Save the downloaded file

      const timestamp = new Date().getTime();
      const fileUri =
        FileSystem.documentDirectory + `audioFile_${timestamp}.mp3`;
      const result = await FileSystem.downloadAsync(url as string, fileUri);
      console.log(result);
      saveFile(result.uri, timestamp, result.headers["Content-Type"]);
      Toast.show({
        type: "success",
        text1: "Audio downloaded successfully ✅",
      });

      Linking.openURL(result.uri); // Opens the downloaded file
    } catch (error) {
      console.log("Error downloading audio:", error.message);
      Toast.show({
        type: "error",
        text1: "Failed to download the audio ❌",
      });
    }
  };
  async function saveFile(uri, filename, mimetype) {
    if (Platform.OS === "android") {
      const permissions =
        await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
      const mimeType = mimetype ?? "audio/mpeg"; // Fallback to "audio/mpeg" if null
      if (permissions.granted) {
        const base64 = await FileSystem.readAsStringAsync(uri, {
          encoding: FileSystem.EncodingType.Base64,
        });

        const safeFilename = `audio_${new Date().getTime()}.mp3`;

        await FileSystem.StorageAccessFramework.createFileAsync(
          permissions.directoryUri,
          safeFilename,
          mimeType
        )
          .then(async (newUri) => {
            await FileSystem.writeAsStringAsync(newUri, base64, {
              encoding: FileSystem.EncodingType.Base64,
            });
            console.log("File saved successfully:", newUri);
          })
          .catch((e) => console.log("File creation error:", e));
      } else {
        console.log("Permission not granted.");
      }
    } else {
      console.log("SAF is only required for Android.");
    }
  }

  return (
    <LinearGradient
      colors={["#5e35b1", "#673ab7", "#ab47bc"]}
      style={{ flex: 1, paddingHorizontal: 8 }}
    >
      <SafeAreaView className="h-full">
        {/* Top Image */}
        <Image
          source={require("@/assets/images/audio-file.png")}
          className={` ${Platform.OS === "android" ? "mt-12" : ""} w-full h-80`}
          resizeMode="contain"
        />

        {/* Play/Pause Button */}
        <TouchableOpacity
          onPress={handlePlayPause}
          className="bg-blue-500 rounded-2xl mt-9 py-5 px-9"
        >
          <Text className="text-white text-xl font-semibold text-center">
            {isPlaying ? "Pause Audio" : "Play Audio"}
          </Text>
        </TouchableOpacity>

        {/* Stop Button */}
        {isPlaying && (
          <TouchableOpacity
            onPress={handleStop}
            className="bg-red-500 rounded-2xl mt-4 py-5 px-9"
          >
            <Text className="text-white text-xl font-semibold text-center">
              Reset Audio
            </Text>
          </TouchableOpacity>
        )}

        {/* Back Button */}
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute top-14 left-4 bg-black/30 w-12 h-12 items-center justify-center rounded-full"
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>

        {/* Download Button */}
        <TouchableOpacity
          onPress={handleDownloadAudio}
          className="absolute bottom-12 w-full justify-center self-center"
        >
          <LinearGradient
            colors={["#5e35b1", "#673ab7", "#ab47bc"]}
            start={{ x: 0.2, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: "100%",
              paddingVertical: 15,
              borderRadius: 50,
            }}
          >
            <View className="flex flex-row items-center justify-center gap-x-1">
              <AntDesign name="download" size={24} color="white" />
              <Text className="text-white font-bold text-xl">Download</Text>
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
