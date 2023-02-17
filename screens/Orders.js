import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import { getOrders, handleFetchError } from "../utils/utils";
import { useEffect } from "react";
import * as Progress from "react-native-progress";
import Loader from "../assets/OrderLoading.gif";
import { Image } from "react-native";

export default function Orders() {
  const [orders, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState(1);
  useEffect(() => {
    getOrders()
      .then((data) => {
        orders.concat(data);
      })
      .catch((err) => {
        alert(handleFetchError(err));
      });
  }, []);

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
    <View className="bg-white flex-1">
      {loading && (
        <View className="flex-1 items-center space-y-5">
          <Image source={Loader} className="w-[100%] h-[50%]" />
          <Text className="font-bold text-2xl">
            Loading {".".repeat(loadingText)}
          </Text>
        </View>
      )}
    </View>
  );
}
