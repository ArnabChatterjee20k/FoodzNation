import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function OptionalText({actionText,linkText,action}) {
  return (
    <View className="flex-row justify-center items-center gap-2">
        <Text className="font-bold">{actionText}</Text>
        <TouchableOpacity onPress={action}>
          <Text className="text-[#1cb0a4] underline">{linkText}</Text>
        </TouchableOpacity>
      </View>
  )
}