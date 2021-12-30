import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {registerRootComponent} from 'expo'
import { Home } from "./pages";

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{title: "AudioDrive"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default registerRootComponent(App)
