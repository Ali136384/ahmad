import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
const { height, width } = Dimensions.get("window");

export default function EditProfile({ navigation, route }) {
  const user = route.params.user;
  console.log(user);

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const update = () => {
    const auth = getAuth();
    const user = auth.currentUser; // Get the currently signed-in user

    if (user) {
      // Update the user's profile display name
      newName.length &&
        updateProfile(user, { displayName: newName })
          .then(() => {
            console.log("User profile updated with name:", newName);
            Alert.alert("User profile updated with name:", newName);
          })
          .catch((error) => {
            console.error("Error updating user profile:", error);
          });

      // Send a verification email to the new email address
      newEmail.length &&
        sendEmailVerification(user)
          .then(() => {
            console.log("Verification email sent to the new email address");
            // Inform the user that a verification email has been sent
            // and prompt them to check their email for further instructions.
            Alert.alert(
              "Verification Email Sent",
              "A verification email has been sent to your new email address. Please follow the instructions in the email to verify your email."
            );
          })
          .catch((error) => {
            console.error("Error sending verification email:", error);
            // Handle the error
          });
    } else {
      console.error("No user is currently signed in");
      // Handle the case when no user is signed in
    }
  };

  return (
    <View style={{ height, backgroundColor: "white", padding: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{
              backgroundColor: "#F7F7F9",
              padding: 9,
              borderRadius: 999,
            }}
          >
            <Text>
              <Ionicons name="chevron-back" size={24} color="#58CBAC" />
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={{ color: "#21BA90", fontWeight: "bold", fontSize: 20 }}>
          Edit Profile
        </Text>
        <TouchableOpacity onPress={update}>
          <View
            style={{
              padding: 10,
              borderRadius: 999,
            }}
          >
            <Text
              style={{ color: "#FA9D1C", fontSize: 15, fontWeight: "bold" }}
            >
              Done
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Image
          borderRadius={999}
          height={80}
          width={80}
          source={{
            uri: "https://st2.depositphotos.com/2703645/7303/v/450/depositphotos_73039841-stock-illustration-male-avatar-icon.jpg",
          }}
        />
        <Text
          style={{
            marginTop: 10,
            fontWeight: "500",
            fontSize: 18,
            color: "#144F59",
          }}
        >
          {route.params.user?.displayName}
        </Text>
        <Text style={{ color: "#7D848D" }}> {route.params.user?.email}</Text>
        <View
          style={{
            margin: 20,
            padding: 20,
            gap: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "#144F59" }}>
            User Name
          </Text>
          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 10,
              borderColor: "gray",
              borderWidth: 0.4,
              width: width - 30,
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 30,
              borderRadius: 10,
            }}
          >
            <TextInput
              onChangeText={(text) => setNewName(text)}
              defaultValue={user?.displayName}
            />

            <Text>
              <AntDesign name="check" size={24} color="#F99D1B" />
            </Text>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "#144F59" }}>
            Email
          </Text>
          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 10,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 0.4,
              width: width - 30,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              onChangeText={(text) => setNewEmail(text)}
              defaultValue={user?.email}
            />
            <Text>
              <AntDesign name="check" size={24} color="#F99D1B" />
            </Text>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "#144F59" }}>
            Passowrd
          </Text>
          <View
            style={{
              paddingHorizontal: 30,
              borderRadius: 10,
              paddingVertical: 10,
              borderColor: "gray",
              borderWidth: 0.4,
              width: width - 30,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput defaultValue={route.params?.password} />
            <Text
              onPress={() => navigation.navigate("ForgetPass")}
              style={{
                fontWeight: "bold",
                textDecorationLine: "underline",
                color: "#21BA90",
              }}
            >
              Update Passowrd
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
