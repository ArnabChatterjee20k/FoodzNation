import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useState } from "react";
import { getOrders, getRelativeDate, handleFetchError } from "../utils/utils";
import { useEffect } from "react";
import * as Progress from "react-native-progress";
import Loader from "../assets/OrderLoading.gif";
import { Image } from "react-native";
import OrderLoader from "../components/OrderLoader";
import { urlFor } from "../sanityFetcher";

export default function Orders() {
  const [orders, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrders()
      .then((data) => {
        const newOrders = data.reduce((initialOrder, item) => {
          // console.log(JSON.stringify(item?.orderDate,null,4))
          const date = item?.orderDate;
          initialOrder[date] = item.items;
          return initialOrder;
        }, {});
        setOrder(newOrders);
        setLoading(false);
      })
      .catch((err) => {
        alert(handleFetchError(err));
      });
  }, []);

  return (
    <View className="bg-white flex-1">
      {loading ? (
        <OrderLoader loader={Loader} />
      ) : (
        <View className="flex-1">
          {
            <ScrollView className="divide-y divide-gray-200">
              {Object.entries(orders).map(([key, items]) => {
                return (
                  <View key={key} className="px-2 gap-3 my-2">
                    <View className="px-1">
                      <Text className="text-xl">{getRelativeDate(key)}</Text>
                    </View>
                    {items.map((item, index) => {
                      return (
                        <View
                          key={index}
                          className="flex-row items-center space-x-3 bg-white py-2 px-5"
                        >
                          <Image
                            source={{ uri: urlFor(item?.image).url() }}
                            className="h-12 w-12"
                          />
                          <Text className="text-[#00ccbb]">
                            {item?.count} x{" "}
                          </Text>
                          <Text className="flex-1 font-medium">
                            {item?.name}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                );
              })}
            </ScrollView>
          }
        </View>
      )}
    </View>
  );
}
