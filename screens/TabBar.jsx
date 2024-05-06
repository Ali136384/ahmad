import React from "react";
import { TabBar } from "./TabBar";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");
export default function TabBa() {
  return (
    <View style={s.bott_container}>
      <View style={s.bott}>
        <View style={s.tab_container}>
          <Text>
            <SimpleLineIcons name="home" size={26} color="#21BA90" />
          </Text>
          <Text style={s.bottom_txt}>Home</Text>
        </View>
        <View style={s.tab_container}>
          <Text>
            <FontAwesome5 name="calendar-alt" size={24} color="#21BA90" />
          </Text>
          <Text style={s.bottom_txt}>calendar</Text>
        </View>
        <View style={s.search_container}>
          <AntDesign name="search1" size={24} color="white" />
        </View>
        <View style={s.tab_container}>
          <Text>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color="#21BA90"
            />
          </Text>
          <Text style={s.bottom_txt}>Messages</Text>
        </View>
        <View style={s.tab_container}>
          <Text>
            <Ionicons name="person-outline" size={24} color="#21BA90" />
          </Text>
          <Text style={s.bottom_txt}>Profile</Text>
        </View>
      </View>
    </View>
  );
}
const s = StyleSheet.create({
  container: {
    height: height - 100,
  },
  bott_container: {
    borderRadius: 16,
    overflow: "hidden",
  },
  bott: {
    height: 100,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 16,
    paddingHorizontal: 20,
    overflow: "hidden",
  },
  bottom_txt: {
    color: "#144F59",
    fontWeight: "bold",
  },
  tab_container: {
    justifyContent: "center",
    alignItems: "center",
  },
  search_container: {
    backgroundColor: "#21BA90",
    borderRadius: 999,
    top: -8,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
