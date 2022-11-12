import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./src/domain/store";
import { Home, Login } from "./src/presentation/screens";
const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="login"
					component={Login}
					options={{ headerShown: false }}
				></Stack.Screen>
				<Stack.Screen
					name="home"
					component={Home}
				></Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
		</Provider>
	);
}
