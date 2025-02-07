import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
type CustomButtonType = {
  title?: string;
  onPress: (e: any) => void;
  image?: ImageSourcePropType;
  className?: string;
  useDefault?: boolean;
};
const CustomButton: React.FC<CustomButtonType> = ({
  title,
  onPress,
  image,
  useDefault = true,
  className = "rounded-full bg-accent",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${!useDefault ? "" : "py-5 px-5"}   ${className}`}
    >
      {image && (
        <Image
          source={image}
          className="w-8 h-8 rounded-full"
          resizeMode="contain"
        />
      )}
      <Text className="text-white text-center font-Roboto-Medium text-xl">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
