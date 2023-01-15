import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketItemsById, selectBasketTotal } from '../features/basketSlice'

export default function BasketIcon({id}) {
    const items = useSelector(selectBasketItems)
    const navigation = useNavigation()
    const basketTotal = useSelector(selectBasketTotal);

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="mx-5 bg-[#00ccdd] p-4 rounded-lg flex-row items-center space-x-1">
            <Text className="text-white font-extrabold text-lg bg-[#01A296] px-2 py-1">{items.length}</Text>
            <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
            <Text className="text-lg text-white font-extrabold">
                {basketTotal}
            </Text>
      </TouchableOpacity>
    </View>
  )
}