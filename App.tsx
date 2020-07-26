import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Films from "./screens/Films";

import { Provider } from "react-redux";
import store from "./state/store";
import Header from "./shared/header";

export type RootStackParamList = {
  Home: undefined;
  Films: string[];
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const headerOptions = () => {
    return {
      headerTitle: () => <Header />,
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#282727",
      },
    };
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={headerOptions} />
          <Stack.Screen
            name="Films"
            component={Films}
            options={{
              headerStyle: {
                backgroundColor: "#282727",
              },
              headerTintColor: "white",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
