import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");

export default function EditProfile({ navigation }) {
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
        <View
          style={{
            padding: 10,
            borderRadius: 999,
          }}
        >
          <Text style={{ color: "#FA9D1C", fontSize: 15, fontWeight: "bold" }}>
            Done
          </Text>
        </View>
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
          Ahmet Awad
        </Text>
        <Text style={{ color: "#7D848D" }}>aawad9797@gmail.com</Text>
        <View
          style={{
            margin: 20,
            padding: 20,
            gap: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "#144F59" }}>
            First Name
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
            <Text>Profile</Text>
            <View style={{ flexDirection: "row", gap: 14 }}></View>
            <Text>
              <AntDesign name="check" size={24} color="#F99D1B" />
            </Text>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "#144F59" }}>
            Last Name
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
            <Text>Profile</Text>
            <View style={{ flexDirection: "row", gap: 14 }}></View>
            <Text>
              <AntDesign name="check" size={24} color="#F99D1B" />
            </Text>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "#144F59" }}>
            Location
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
            }}
          >
            <Text>Profile</Text>
            <View style={{ flexDirection: "row", gap: 14 }}></View>
            <Text>
              <AntDesign name="check" size={24} color="#F99D1B" />
            </Text>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "#144F59" }}>
            Mobile Number
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
            }}
          >
            <Text>Profile</Text>
            <View style={{ flexDirection: "row", gap: 14 }}></View>
            <Text>
              <AntDesign name="check" size={24} color="#F99D1B" />
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
