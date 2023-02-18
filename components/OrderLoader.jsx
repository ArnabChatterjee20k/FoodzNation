import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { useEffect } from "react";

export default function OrderLoader({ loader }) {
  const [loadingText, setLoadingText] = useState(1);
  useEffect(() => {
    const id = setInterval(() => {
      setLoadingText((prev) => {
        return prev < 5 ? prev + 1 : 1;
      });
    }, 400);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <View className="flex-1 items-center space-y-5">
      <Image source={loader} className="w-[100%] h-[50%]" />
      <Text className="font-bold text-2xl">
        Loading {".".repeat(loadingText)}
      </Text>
    </View>
  );
}
