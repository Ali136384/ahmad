import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");
export default function Details({ navigation }) {
  return (
    <View style={{ height }}>
      <View>
        <Image
          height={400}
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/435c/561d/d1ea2a4643541a082e29f3f3156f70d7?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lacvZmvOt716aVnn~ykJ3K9B6t9WTvZOCqeDpR9yOqLSB4xR-JiMDJXmbyWhY5Ah8wA1UAo9W-xmXbXr4cq0QbuzRn7LV1WDoEpEJVp6FsNH327T0Kl1yZbx9AUqRJ2FZtJsy1U3n-RgjtWrOoC41E1nu8jhK0O5Q0WrfmlWgOMku7SIveuz9PVc2OU4XGo8Ev7PR0gb2Mm2iwK2mEHaT-yTFlAUq12to9pRNlCzzRuMqWYw91TLbwpiksCk0Czbn~XkeqI4xE0tP~9gxDa2HYNm7COzn-iTTf5KWldWVJimG~Y7OHD3AP-eb1eTZZyx8IiFI4t5VNibBCCHgSj-eQ__",
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          width,
          height: height,
          top: -50,

          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <View
          style={{
            textAlign: "center",
            marginTop: 15,
            backgroundColor: "#eee",
            width: 40,
            height: 7,
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 999,
          }}
        ></View>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#144F59" }}>
            PT-190
          </Text>
          <Text style={{ marginTop: 4, marginBottom: 15, opacity: 0.6 }}>
            Sapanca ,Turkey
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>
                <EvilIcons name="location" size={24} color="black" />
              </Text>
              <Text style={{ opacity: 0.5, fontSize: 17 }}>Sapanca</Text>
            </View>
            <View>
              <Text
                style={{ color: "#FA9D1C", fontWeight: "bold", fontSize: 19 }}
              >
                $59/Persons
              </Text>
            </View>
          </View>
          <Text style={{ marginTop: 20, fontSize: 26, color: "#144F59" }}>
            About Destination
          </Text>
          <Text
            style={{
              opacity: 0.6,
              marginTop: 10,
              fontSize: 16,
              fontWeight: "300",
            }}
          >
            A two-storey cottage surrounded by nature with a charming mountain
            view to enjoy enjoyable and wonderful times.
          </Text>
          <Image
            style={{ width: 300, height: 66, marginTop: 20 }}
            source={require("../ICONS.png")}
          />

          <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
            <View
              style={{
                backgroundColor: "#FA9D1C",
                alignItems: "center",
                paddingVertical: 15,
                marginTop: 40,
                borderRadius: 20,
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                Book Now
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
