import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import TabBar from "./TabBar";
const { height, width } = Dimensions.get("window");
export default function Searech({ navigation }) {
  const divsNumber = [1, 2, 3, 4, 5, 6];
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          paddingTop: 30,
        }}
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
            Search
          </Text>
          <Text style={{ color: "#FA9D1C", fontWeight: "bold", fontSize: 15 }}>
            Cancel
          </Text>
        </View>
        <View
          style={{
            marginTop: 30,
            backgroundColor: "#DEDEDE67",
            paddingHorizontal: 20,
            paddingVertical: 16,
            borderRadius: 10,
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <Text>
            <AntDesign name="search1" size={24} color="gray" />
          </Text>
          <TextInput placeholder="Search Places" style={{ color: "gray" }} />
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            paddingTop: 10, // Adjust the padding as needed
          }}
        >
          <Text
            style={{
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 20,
              color: "#144F59",
            }}
          >
            Search Places
          </Text>
          <View
            style={{
              marginTop: 30,
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {divsNumber.map((ele) => {
              return (
                <View
                  key={ele}
                  style={{
                    gap: 5,
                    marginBottom: 10,
                    backgroundColor: "white",
                    shadowColor: "black",
                    shadowOffset: {
                      height: 2,
                      width: 2,
                    },
                    shadowOpacity: 1,
                    shadowRadius: 1,
                    elevation: 1,
                    width: width / 2 - 35,
                    alignItems: "center",
                    borderRadius: 20,
                    margin: 5,
                  }}
                >
                  <Image
                    borderRadius={20}
                    height={134}
                    width={159}
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/1e1f/ab5f/9967bbde06bd73f819c855e70413fb00?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gz9mJfFu3RZCPvcYxeGTrC9apQ~CsLLzcLXX8JwZBlBH732iUCk1NYztG1ThK3sJkE19SNKd-~XOvMcnNoNwTCWgYXFBqJWLszL8l9X6o9qRYcqq1XGpcZL8VmbgR6ppm5tR3rWOB3nQOaCzvvq6FLMZJWnC~RZd56OXbLVtUbGaVzi~scxffOvQLLd1QsmVSVl~oLP~0eFUGn~V-UuyQVwymM2RNCqdj1sM1E0wBj42Q~8cRMQIXZYh~HL05e~WvPSlvG9t4~srC0mC6jjVAomWqWWkGITypNSVsOA76QRXhd8BJ2QcNql7edpjoRCjmmaVs4HjPYX3MWFj4T5O2g__",
                    }}
                  />
                  <View
                    style={{
                      gap: 4,
                      alignItems: "flex-start",
                      width: width / 2 - 20,
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#144F59",
                        fontSize: 17,
                      }}
                    >
                      PT -185
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ left: -5 }}>
                        <Entypo name="location-pin" size={21} color="gray" />
                      </Text>
                      <Text style={{ color: "gray" }}>Sapanca</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ fontWeight: "bold", color: "#FA9D1C" }}>
                        $250
                      </Text>
                      <Text style={{ color: "#24BAEC" }}>/</Text>
                      <Text style={{ fontWeight: "bold", color: "gray" }}>
                        Person
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <TabBar />
    </View>
  );
}
