import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { registerRootComponent } from "expo";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Home } from "./pages";

const client = new ApolloClient({
  uri: "localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ApolloProvider client={client}>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "AudioDrive" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default registerRootComponent(App);
