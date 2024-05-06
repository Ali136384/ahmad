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

export default function Forget_password({ navigation }) {
  return (
    <View style={s.container}>
      <View style={s.back_container}>
        <Text onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#21BA90" />
        </Text>
      </View>
      <View style={s.content_container}>
        <Text style={s.txt1}>Forgot password</Text>
        <Text style={s.txt2}>
          Enter your email account to reset your password
        </Text>
      </View>
      <View style={s.inputs_container}>
        <View style={s.email_inp}>
          <TextInput style={s.inpt1} placeholder="E-mail" />
        </View>

        <TouchableOpacity style={s.sign_in}>
          <View>
            <Text style={s.login}>Reset Password</Text>
          </View>
        </TouchableOpacity>
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
    fontSize: 18,
    textAlign: "center",
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
});
