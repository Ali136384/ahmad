import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const { height } = Dimensions.get("window");

export default function Login({ navigation }) {
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
          <TextInput style={s.inpt1} placeholder="E-mail" />
        </View>
        <View style={s.pass_inp}>
          <TextInput style={s.inpt2} placeholder="password" secureTextEntry />
          <Feather name="eye-off" size={24} color="gray" />
        </View>
        <Text
          onPress={() => navigation.navigate("ForgetPass")}
          style={s.forget_password}
        >
          Forget Password ?
        </Text>
        <TouchableOpacity style={s.sign_in}>
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
