import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Films from "./screens/Films";

import { Provider } from "react-redux";
import store from "./state/store";

export type RootStackParamList = {
  Home: undefined;
  Films: string[];
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Films" component={Films} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
