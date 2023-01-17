import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanityFetcher";

export default function Basket() {
  const dispatch = useDispatch();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const total = useSelector(selectBasketTotal);
  const [groupedItemBasket, setGroupedItemBasket] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View className="gap-1">
          <Text className="font-bold text-lg">Basket</Text>
          <Text className="text-gray-400">{restaurant?.header}</Text>
        </View>
      ),
    });
  }, []);
  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      // result is basically the initial object in the reduce
      // if item.id present then push the item in the array
      // else make an array and then push an item
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemBasket(groupedItems);
  }, [items]);

  return (
    <>
      <View className="flex-row items-center p-4 bg-white my-4 shadow-lg">
        <Image
          className="h-7 w-7 -scale-x-100 mx-2 bg-gray-100 rounded-full"
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3128/3128849.png",
          }}
        />
        <Text className="flex-1 font-semibold">Deliver in 50-75 minutes</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]">Change</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="divide-y divide-gray-200">
        {Object.entries(groupedItemBasket).map(([key, item]) => {
          return (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00ccbb]">{item.length} x </Text>
              <Image
                source={{ uri: urlFor(item[0].image).url() }}
                className="h-12 w-12"
              />
              <Text className="flex-1 font-medium">{item[0].name}</Text>
              <Text className="text-gray-600">{item[0].price}</Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text className="text-[#00ccbb]">Remove</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      <View className="p-5 bg-white space-y-4 rounded-t-xl border-t-2 border-gray-100">
        <View className="flex-row justify-between">
          <Text className="text-gray-400">SubTotal</Text>
          <Text className="text-gray-400">{total}</Text>
        </View>
      </View>

      <View className="p-5 bg-white space-y-4">
        <View className="flex-row justify-between">
          <Text className="text-gray-400">Delivery Fee</Text>
          <Text className="text-gray-400">5.99</Text>
        </View>
      </View>

      <View className="p-5 bg-white space-y-4 border-t-[1px] border-gray-400">
        <View className="flex-row justify-between">
          <Text className="font-bold text-lg">Order Total</Text>
          <Text className="font-bold text-lg">{total + 5.99}</Text>
        </View>
      </View>
      <View className="px-2 pb-4 bg-white">
        <TouchableOpacity className="rounded-lg bg-[#00ccbb] p-4" onPress={()=>navigation.navigate("PreparingOrderScreen")}>
          <Text className="text-center text-white text-lg font-bold">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
