import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Restaurant from "./screens/Restaurant";
import { store } from "./store";
import { Provider } from "react-redux";
import Basket from "./screens/Basket";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          {/* screens */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Restaurant" component={Restaurant} options={{animation:"slide_from_right"}}/>
          <Stack.Screen
            name="Basket"
            component={Basket}
            options={{ headerShown: true ,animation:"slide_from_bottom"}}
          />
          <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
