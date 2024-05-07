import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Starter from "./screens/Starter";
import Starter1 from "./screens/Starter1";
import { StatusBar } from "react-native";
import Login from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import forget_password from "./screens/ForgetPassword";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Payment1 from "./screens/Payment1";
import Searech from "./screens/Searech";
import Profile from "./screens/Profile.jsx";
import EditProfile from "./screens/EditProfile.jsx";
import Calendar from "./screens/Calendar.jsx";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen
          name="Starter"
          component={Starter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Calendar"
          component={Calendar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Searech}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgetPass"
          component={forget_password}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Starter1"
          component={Starter1}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
