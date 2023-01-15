import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectBasketItemsById } from "../features/basketSlice";

export default function Counter({ id, name, description, price, image }) {
  const dispatch = useDispatch();
   const items = useSelector((state)=>selectBasketItemsById(state,id))
   const addItemToBasket = () => {
       dispatch(addToBasket({ id, name, description, price, image }));
  };
  const removeItemFromBasket = ()=>{
    dispatch(removeFromBasket({id}))
  }
  return (
    <View className="bg-white px-4">
      <View className="flex-row items-center space-x-3">
        
        <TouchableOpacity onPress={removeItemFromBasket} disabled={!items.length}>
          <MinusCircleIcon size={40} color={items.length>0 ? "#00CCBB":"gray"} />
        </TouchableOpacity>
        
        <Text className="text-xl">{items.length}</Text>
        
        <TouchableOpacity onPress={addItemToBasket}>
          <PlusCircleIcon size={40} color="#00CCBB" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
