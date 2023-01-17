import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { selectBasketItems } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";

export default function Basket() {
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
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
    <View className="flex-row items-center p-4 bg-white mt-4 shadow-lg">
      <Image
        className="h-7 w-7 -scale-x-100 mx-2 bg-gray-100 rounded-lg"
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3128/3128849.png",
        }}
      />
      <Text className="flex-1 font-semibold">Deliver in 50-75 minutes</Text>
      <TouchableOpacity>
        <Text className="text-[#00CCBB]">Change</Text>
      </TouchableOpacity>
    </View>
  );
}
