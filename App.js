import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Restaurant from "./screens/Restaurant";
import { store } from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";
import Basket from "./screens/Basket";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import Delivery from "./screens/Delivery";
import ScreenNavigator from "./ScreenNavigator";
import { getToken, setToken } from "./utils/utils";
import { getIsLoggedIn } from "./features/authSlice";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
          <ScreenNavigator/>
      </Provider>
    </NavigationContainer>
  );
}
