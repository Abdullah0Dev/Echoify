import { View, Text } from "react-native";
import React from "react";
import { Slider } from "react-native-awesome-slider";
import { useSharedValue } from "react-native-reanimated"; 
const PlayerProgressBar = () => { 
  const progress = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(1); 
  return (
    <View className="mt-5">
      <Slider minimumValue={min} maximumValue={max} progress={progress} />
      <Text>PlayerProgressBar</Text>
    </View>
  );
};

export default PlayerProgressBar;
