import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import TabBar from "./TabBar";
import { getAuth } from "firebase/auth";
const { height, width } = Dimensions.get("window");

export default function Profile({ navigation, route }) {
  useEffect(() => {
    const user = route.params.user;
    console.log(user);
  }, []);

  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await auth.signOut(); // Sign out the user using Firebase auth
      navigation.navigate("Login"); // Redirect the user to the login page
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };
  return (
    <>
      <View
        style={{ height: height - 100, backgroundColor: "white", padding: 20 }}
      >
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
            Profile
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("EditProfile", {
                user: route.params.user,
                password: route.params.password,
              })
            }
          >
            <View
              style={{
                color: "#FA9D1C",
                fontSize: 15,
                padding: 10,
                borderRadius: 999,
                backgroundColor: "#eee",
              }}
            >
              <AntDesign name="edit" size={24} color="#FA9D1C" />
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
          <Text style={{ color: "#7D848D" }}>{route.params.user?.email}</Text>
          <View
            style={{
              marginTop: 20,
              gap: 10,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("EditProfile", {
                  user: route.params?.user,
                  password: route.params?.password,
                })
              }
            >
              <View
                style={{
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  borderBottomColor: "gray",
                  borderBottomWidth: 0.4,
                  width,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", gap: 14 }}>
                  <Text style={{ left: 3 }}>
                    <Ionicons name="person-outline" size={24} color="gray" />
                  </Text>
                  <Text>Profile</Text>
                </View>
                <Text>
                  <AntDesign name="right" size={24} color="gray" />
                </Text>
              </View>
            </TouchableOpacity>

            <View
              style={{
                paddingHorizontal: 30,
                paddingVertical: 10,
                borderBottomColor: "gray",
                borderBottomWidth: 0.4,
                width,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", gap: 14 }}>
                <Text style={{ left: 3 }}>
                  <Fontisto name="bookmark" size={24} color="gray" />
                </Text>
                <Text>Bookmarked</Text>
              </View>
              <Text>
                <AntDesign name="right" size={24} color="gray" />
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 30,
                paddingVertical: 10,
                borderBottomColor: "gray",
                borderBottomWidth: 0.4,
                width,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", gap: 14 }}>
                <Text style={{ left: 3 }}>
                  <MaterialIcons name="payments" size={24} color="gray" />
                </Text>
                <Text>Payment </Text>
              </View>
              <Text>
                <AntDesign name="right" size={24} color="gray" />
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 30,
                paddingVertical: 10,
                borderBottomColor: "gray",
                borderBottomWidth: 0.4,
                width,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", gap: 14 }}>
                <Text style={{ left: 3 }}>
                  <Feather name="settings" size={24} color="gray" />
                </Text>
                <Text>Settings</Text>
              </View>
              <Text>
                <AntDesign name="right" size={24} color="gray" />
              </Text>
            </View>
            <TouchableOpacity onPress={handleSignOut}>
              <View
                style={{
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  borderBottomColor: "gray",
                  borderBottomWidth: 0.4,
                  width,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", gap: 14 }}>
                  <Text style={{ left: 3 }}>
                    <AntDesign name="logout" size={24} color="gray" />
                  </Text>
                  <Text>Logout</Text>
                </View>
                <Text>
                  <AntDesign name="right" size={24} color="gray" />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TabBar navigation={navigation} />
    </>
  );
}
