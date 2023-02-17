import { useState } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { urlFor } from "../sanityFetcher";
import Counter from "./Counter";

export default function DishRow({
  id,
  name,
  short_description,
  price,
  image,
  restaurant,
}) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <TouchableOpacity
        className={`p-4 bg-white border-x-gray-200 ${
          isPressed && "border-b-0"
        }`}
        onPress={() => setIsPressed((prev) => !prev)}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{short_description}</Text>
            <Text className="text-gray-400 mt-2">{price}</Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#f3f3f3" }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <Counter
          restaurant={restaurant}
          id={id}
          name={name}
          description={short_description}
          price={price}
          image={image}
        />
      )}
    </>
  );
}
