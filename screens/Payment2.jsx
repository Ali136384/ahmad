import { View, Text, Dimensions, Image, TextInput } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
export default function Payment1() {
  return (
    <View style={{ height, padding: 40 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            width: 100,
            backgroundColor: "#dedede",
            height: 5,
            borderRadius: 10,
          }}
        ></Text>
        <Text
          style={{
            width: 100,
            backgroundColor: "#21BA90",
            height: 5,
            borderRadius: 10,
          }}
        ></Text>
        <Text
          style={{
            width: 100,
            backgroundColor: "#dedede",
            height: 5,
            borderRadius: 10,
          }}
        ></Text>
      </View>
      <Text style={{ textAlign: "center", marginTop: 10, color: "#144F59" }}>
        Step 2 / 3
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginTop: 20,
          color: "#FA9D1C",
          fontWeight: "bold",
          fontSize: 25,
        }}
      >
        Payment
      </Text>
      <Text
        style={{
          fontSize: 13,
          textAlign: "center",
          marginTop: 14,
          fontWeight: "400",
          color: "#144F59",
        }}
      >
        Please fill the required identity and detail booking below
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            height={60}
            width={60}
            borderRadius={10}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/435c/561d/d1ea2a4643541a082e29f3f3156f70d7?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lacvZmvOt716aVnn~ykJ3K9B6t9WTvZOCqeDpR9yOqLSB4xR-JiMDJXmbyWhY5Ah8wA1UAo9W-xmXbXr4cq0QbuzRn7LV1WDoEpEJVp6FsNH327T0Kl1yZbx9AUqRJ2FZtJsy1U3n-RgjtWrOoC41E1nu8jhK0O5Q0WrfmlWgOMku7SIveuz9PVc2OU4XGo8Ev7PR0gb2Mm2iwK2mEHaT-yTFlAUq12to9pRNlCzzRuMqWYw91TLbwpiksCk0Czbn~XkeqI4xE0tP~9gxDa2HYNm7COzn-iTTf5KWldWVJimG~Y7OHD3AP-eb1eTZZyx8IiFI4t5VNibBCCHgSj-eQ__",
            }}
          />
          <View>
            <Text style={{ fontWeight: "bold", color: "#144F59" }}>PT-190</Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 8,
                alignItems: "center",
              }}
            >
              <Text>
                <EvilIcons name="location" size={22} color="#144F59" />
              </Text>
              <Text style={{ color: "#144F59", fontSize: 12, top: 2 }}>
                Scapanca
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            textDecorationLine: "underline",
            color: "#FA9D1C",
            fontSize: 12,
          }}
        >
          View Details
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <View>
          <Text
            style={{ marginBottom: 5, color: "#144F59", fontWeight: "bold" }}
          >
            Date
          </Text>
          <View
            style={{
              width: 154,

              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 6,
              flexDirection: "row",
              gap: 10,
              paddingVertical: 15,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text>
              <AntDesign name="calendar" size={21} color="gray" />
            </Text>
            <Text>Cgoose Date</Text>
            <Text>
              <Feather name="arrow-down" size={21} color="gray" />
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{ marginBottom: 5, color: "#144F59", fontWeight: "bold" }}
          >
            Guests
          </Text>
          <View
            style={{
              width: 169,
              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 6,
              flexDirection: "row",
              gap: 10,
              paddingVertical: 15,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text>
              <Fontisto name="persons" size={21} color="gray" />
            </Text>
            <Text>Number of Guests</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ marginBottom: 6, color: "#144F59", fontWeight: "bold" }}>
          Name
        </Text>
        <View
          style={{
            borderColor: "gray",
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        >
          <TextInput placeholder="Enter Full Name" />
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ marginBottom: 6, color: "#144F59", fontWeight: "bold" }}>
          Phone Number{" "}
        </Text>
        <View
          style={{
            paddingVertical: 10,
            borderRadius: 10,
            flexDirection: "row",
            gap: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: 95,
              borderColor: "gray",
              borderWidth: 1,
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <TextInput
              style={{
                paddingVertical: 10,
                paddingHorizontal: 16,
              }}
              placeholder="+90"
            />
            <Feather name="arrow-down" size={21} color="gray" />
          </View>
          <TextInput
            style={{
              borderColor: "gray",
              borderWidth: 1,
              flex: 1,
              paddingVertical: 10,
              paddingHorizontal: 16,
              borderRadius: 10,
            }}
            placeholder="Enter Full Name"
          />
        </View>
        <View
          style={{
            backgroundColor: "#dedede",
            paddingVertical: 9,
            marginTop: 10,
            borderRadius: 10,
            paddingHorizontal: 30,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text>
            <Ionicons name="alert-circle-outline" size={21} color="black" />
          </Text>
          <Text style={{ fontSize: 9 }}>
            Verification code will be sent to Phone Number above.
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{ marginBottom: 6, color: "#144F59", fontWeight: "bold" }}
          >
            Name
          </Text>
          <View
            style={{
              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <TextInput placeholder="Enter Full Name" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: 150,
              paddingVertical: 15,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              borderColor: "#21BA90",
              borderWidth: 2.1,
            }}
          >
            <Text style={{ color: "#21BA90", fontWeight: "bold" }}>Back</Text>
          </View>
          <View
            style={{
              backgroundColor: "#FA9D1C",
              width: 150,
              paddingVertical: 15,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Continue</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
