import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("@/assets/images/welcome-bg.jpg")}
      className="w-full flex-1 h-full"
    >
      <LinearGradient
        // Button Linear Gradient
        colors={["transparent", "rgba(0, 0, 0, 0.5)", "#000"]}
        // className="flex h-full w-full"
        style={{ flex: 1, height: "100%", width: "100%" }}
      >
        {/* <View className="h-2/4 w-full" /> */}
        <View className="px-5 absolute bottom-12">
          <Text className="text-5xl font-semibold text-white">
            Empower your words with our Al-powered voice
          </Text>
          <Text className="text-lg mt-2 font-semibold text-white/70">
            Speakwise offers a customizable, natural- sounding voice that can be
            tailored to your specific needs.
          </Text>
          <TouchableOpacity
          onPress={() => router.push("/(home)") }
          className="  py-5  mt-3 px-3 rounded-full w-full justify-center self-center">
            <LinearGradient
              colors={["#5e35b1", "#673ab7", "#ab47bc"]}
              start={{ x: 0.2, y: 1 }}
              end={{ x: 1, y: 1 }}
              style={{
                width: "100%",
                paddingVertical: 15,
                paddingHorizontal: 5,
                marginTop: 6,
                borderRadius: 50,
              }}
            >
             
              <Text className="text-white text-center text-xl">
                {" "}
                Get Started
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <StatusBar style="light" />
    </ImageBackground>
  );
};

export default WelcomeScreen;
