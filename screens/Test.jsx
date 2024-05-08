import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
  ScrollViewComponent,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../../assets/images/mediminder_logo.png";

import CustomInput from "../../components/CustomInput";

import CustomButton from "../../components/CustomButton";
import GoogleSignInButton from "../../components/GoogleSignInButton";

import { useNavigation } from "@react-navigation/native";

const SigninScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();

  const navigation = useNavigation();
  const onSignInPressed = () => {
    console.warn("sign in");
    //validate user
    navigation.navigate("Home", { screen: "Home" });
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPressed = () => {
    navigation.navigate("SignUp"); // Corrected navigation destination
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome back! Glad to see you, Again!</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton
          text={"Forgot Password?"}
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
          filled={false}
        />

        <CustomButton
          text={"Sign In"}
          onPress={onSignInPressed}
          type="PRIMARY"
        />

        <Text style={styles.OrText}>Or</Text>

        <GoogleSignInButton />

        <CustomButton
          text={"Don’t have an account? Register Now"}
          onPress={onSignUpPressed}
          type="TERTIARY2"
          filled={false}
        />
      </View>
    </ScrollView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 50,
    marginTop: 50,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#196EB0",
    paddingBottom: 30,
  },
  OrText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#196EB0",
    paddingTop: 30,
    paddingBottom: 30,
  },
});
