import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Restaurant from "./screens/Restaurant";
import { store } from "./store";
import { Provider } from "react-redux";
import Basket from "./screens/Basket";

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
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
