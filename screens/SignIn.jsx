import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const { height } = Dimensions.get("window");
const firebaseConfig = {
  apiKey: "AIzaSyArLf4r-e0TwBa-xK4F7u_nbZNYbWoO6vY",
  authDomain: "ahmad-auth.firebaseapp.com",
  projectId: "ahmad-auth",
  storageBucket: "ahmad-auth.appspot.com",
  messagingSenderId: "304582763428",
  appId: "1:304582763428:web:a49c75ad2fddef401b1731",
};
const app = initializeApp(firebaseConfig);

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const handleSignIn = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(userCredential.user);
        console.log("User signed in:", user);
        navigation.navigate("Home", { user: user, password: password });
      })
      .catch((error) => {
        console.error("Sign-in error:", error);
      });
  };

  return (
    <View style={s.container}>
      <View style={s.back_container}>
        <Text onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#21BA90" />
        </Text>
      </View>
      <View style={s.content_container}>
        <Text style={s.txt1}>Sign in now</Text>
        <Text style={s.txt2}>Please sign in to continue our app</Text>
      </View>
      <View style={s.inputs_container}>
        <View style={s.email_inp}>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            style={s.inpt1}
            placeholder="E-mail"
          />
        </View>
        <View style={s.pass_inp}>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            style={s.inpt2}
            placeholder="password"
            secureTextEntry
          />
          <Feather name="eye-off" size={24} color="gray" />
        </View>
        <Text
          onPress={() => navigation.navigate("ForgetPass")}
          style={s.forget_password}
        >
          Forget Password ?
        </Text>
        <TouchableOpacity onPress={handleSignIn} style={s.sign_in}>
          <View>
            <Text style={s.login}>Sign in</Text>
          </View>
        </TouchableOpacity>
        <View style={s.dont_have_acc}>
          <Text style={s.dont_have_acc_txt1}>Don’t have an account?</Text>
          <Text
            onPress={() => navigation.navigate("SignUp")}
            style={s.dont_have_acc_txt2}
          >
            Sign up
          </Text>
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    height,
    backgroundColor: "white",
    padding: 20,
  },
  back_container: {
    height: 45,
    width: 45,
    borderRadius: 999,
    backgroundColor: "#EAEAFDB7",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  content_container: {
    marginTop: 50,
    alignItems: "center",
    gap: 10,
  },
  txt1: {
    fontWeight: "bold",
    fontSize: 29,
    color: "#21BA90",
  },
  txt2: {
    opacity: 0.5,
    fontSize: 16,
  },
  inputs_container: {
    marginTop: 40,
    gap: 20,
  },
  email_inp: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  pass_inp: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forget_password: {
    textAlign: "right",
    fontSize: 13,
    fontWeight: "bold",
    color: "#FF7029",
  },
  sign_in: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#FA9D1C",
    paddingVertical: 15,
    borderRadius: 10,
  },
  login: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  dont_have_acc: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  dont_have_acc_txt1: {
    fontWeight: "300",
  },
  dont_have_acc_txt2: {
    fontWeight: "bold",
    color: "#FF7029",
  },
});
