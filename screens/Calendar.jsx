import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import TabBar from "./TabBar";
const { height, width } = Dimensions.get("window");

export default function EditProfile({ navigation }) {
  return (
    <>
      <ScrollView>
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
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
            <Text
              style={{ color: "#21BA90", fontWeight: "bold", fontSize: 20 }}
            >
              Schedule
            </Text>
            <View
              style={{
                backgroundColor: "#eee",
                borderRadius: 999,
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>
                <MaterialIcons name="add-alert" size={24} color="#21BA90" />
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 45,
              backgroundColor: "white",
              padding: 20,
              borderRadius: 20,
              shadowColor: "black",
              shadowOffset: {
                height: 10,
                width: 20,
              },
              shadowOpacity: 10,
              shadowRadius: 1,
              elevation: 2,
              paddingVertical: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Text
                style={{ fontWeight: "bold", color: "#144F59", fontSize: 19 }}
              >
                22 October
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text>
                  <Entypo name="chevron-small-left" size={24} color="black" />
                </Text>
                <Text>
                  <Entypo name="chevron-small-right" size={24} color="black" />
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <View style={{ alignItems: "center", gap: 5 }}>
                <Text style={{ color: "gray" }}>S</Text>
                <Text>18</Text>
              </View>
              <View style={{ alignItems: "center", gap: 5 }}>
                <Text style={{ color: "gray" }}>M</Text>
                <Text>18</Text>
              </View>
              <View style={{ alignItems: "center", gap: 5 }}>
                <Text style={{ color: "gray" }}>T</Text>
                <Text>18</Text>
              </View>
              <View style={{ alignItems: "center", gap: 5 }}>
                <Text style={{ color: "gray" }}>W</Text>
                <Text>18</Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  gap: 5,
                  backgroundColor: "orange",
                  paddingHorizontal: 9,
                  paddingVertical: 6,
                  bottom: 7,
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "white" }}>T</Text>
                <Text style={{ color: "white" }}>18</Text>
              </View>
              <View style={{ alignItems: "center", gap: 5 }}>
                <Text style={{ color: "gray" }}>F</Text>
                <Text>18</Text>
              </View>
              <View style={{ alignItems: "center", gap: 5 }}>
                <Text style={{ color: "gray" }}>S</Text>
                <Text>18</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30,
              marginBottom: 30,
              alignItems: "center",
            }}
          >
            <Text
              style={{ color: "#407078", fontWeight: "bold", fontSize: 20 }}
            >
              My Schedule
            </Text>
            <Text style={{ color: "#FA9D1C" }}>View all</Text>
          </View>
          <View style={{ gap: 20 }}>
            <View
              style={{
                flexDirection: "row",
                gap: 16,
                padding: 10,
                borderRadius: 25,
                backgroundColor: "white",
                shadowColor: "black",
                shadowOffset: {
                  height: 10,
                  width: 10,
                },
                shadowOpacity: 1,
                shadowRadius: 1,
                elevation: 2,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
              >
                <Image
                  borderRadius={20}
                  height={90}
                  width={90}
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/3a78/f6f0/91f39cdaa9ee3b8c92c1e738d0fe410b?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WCBNjRKd8H-lfFrg9BWfNbK5q1bN1AOv8ILzNoz5XUFv3Aqp0OS4J96n22HtYB9wtD0JaTlVco0~4ViLv0Tn693Y5UH9roJyXSA7KFD9xpZs94UgNP6opMUIqH9SmuWN0UZ~2pP0PJtXy5fCWeyu0B8v6xCFUdCaX6kanx69My8qBmY1VhM07fmkuByl3TQqnrJMaAjkm1QJ6zNdt7mmaPUQI4Y9n2PJTkeAegbX7DbFcE-aqXDnGxWtb9lM1QTg1i-7nsM1Y~bpCQ001smxCBAb4JaMNEv8ZXVcaD8ewFMkTlK5z8dwmAJFGQoSRx3dxD2g1hICRhdBNC2zqoDUfA__",
                  }}
                />
                <View>
                  <View
                    style={{ flexDirection: "row", gap: 4, marginBottom: 8 }}
                  >
                    <Text>
                      <Feather name="calendar" size={20} color="gray" />
                    </Text>
                    <Text style={{ color: "gray" }}>26 June 2024</Text>
                  </View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#144F59",
                      fontSize: 18,
                    }}
                  >
                    PT-171
                  </Text>
                  <View style={{ flexDirection: "row", marginTop: 5, gap: 4 }}>
                    <Text>
                      <Entypo name="location-pin" size={20} color="gray" />
                    </Text>
                    <Text style={{ color: "gray" }}>Scapcana</Text>
                  </View>
                </View>
              </View>
              <Text>
                <AntDesign name="right" size={20} color="gray" />
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 16,
                padding: 10,
                borderRadius: 25,
                backgroundColor: "white",
                shadowColor: "black",
                shadowOffset: {
                  height: 10,
                  width: 10,
                },
                shadowOpacity: 1,
                shadowRadius: 1,
                elevation: 2,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
              >
                <Image
                  borderRadius={20}
                  height={90}
                  width={90}
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/e933/ff8e/cc8b056d1ee83eac5311aaa7c7d0e085?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qkaWHdJRO0gCXBktwPjj3yZS4Ihu-VjEkxYnu5aPeKgZAD8LkK7T7IXrqRphmRqgvzNkADmndH5cjkTjYM-vUtYO4kUYyDgsfLKC7xbi9Fqk9JJ7OUa5zFjjJwAw8DrIuipQ0YS1wJO41Un8vX~3wKCEIWbjVavuWBifjEhF0RDq6Hwfu8VkacNQSW4L0cRuPeNWzaEk~xVH60KiNDnUPaX3c2yp6m3wTRqRCQzvIXn6pgrUwIu1wSoamms6Gj3F78OBUnnepgIs8qx0QhWqlkY9nvnTV5ZqBz~B1~DgeEQffBHaXvaGjdA5exZDBrAdSQX-U0Ks5egT53NW4iIxrA__",
                  }}
                />
                <View>
                  <View
                    style={{ flexDirection: "row", gap: 4, marginBottom: 8 }}
                  >
                    <Text>
                      <Feather name="calendar" size={20} color="gray" />
                    </Text>
                    <Text style={{ color: "gray" }}>26 June 2024</Text>
                  </View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#144F59",
                      fontSize: 18,
                    }}
                  >
                    PT-171
                  </Text>
                  <View style={{ flexDirection: "row", marginTop: 5, gap: 4 }}>
                    <Text>
                      <Entypo name="location-pin" size={20} color="gray" />
                    </Text>
                    <Text style={{ color: "gray" }}>Scapcana</Text>
                  </View>
                </View>
              </View>
              <Text>
                <AntDesign name="right" size={20} color="gray" />
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 16,
                padding: 10,
                borderRadius: 25,
                backgroundColor: "white",
                shadowColor: "black",
                shadowOffset: {
                  height: 10,
                  width: 10,
                },
                shadowOpacity: 1,
                shadowRadius: 1,
                elevation: 2,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
              >
                <Image
                  borderRadius={20}
                  height={90}
                  width={90}
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/d89a/929e/8a9a434138cd918019750337b12d5634?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kg54Pz1QOjLmJ-NJqGNOFIIwYDu922sUMJeHi-TPko4DvLQeOIc8G3CI2UvXvYyQXL2CM3wrLR90QwX5VptOh1s-5yVWbnF6~DjH3ufIBJWZ-5aS4jr4qngG0VIvSjTiVg6WVgirNjibHi59i7UWMRo6CmYNpARLrUvPogsir7vxMjBOTs4jqJQoI7gAL7ZSqH3iPELiYqruG3hG3oibHpK0uGdMyRSF9GRxwP~G8YrHYi8H4GAgel8eoo--lwM0EMUR7PkqRXagCVbyFW8C4fXl-W73CeH~eSLduw4yQzUbtafveYXTwMuMHog6wZ~~KdHhCLiBJOpB1fktUap8Xw__",
                  }}
                />
                <View>
                  <View
                    style={{ flexDirection: "row", gap: 4, marginBottom: 8 }}
                  >
                    <Text>
                      <Feather name="calendar" size={20} color="gray" />
                    </Text>
                    <Text style={{ color: "gray" }}>26 June 2024</Text>
                  </View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#144F59",
                      fontSize: 18,
                    }}
                  >
                    PT-171
                  </Text>
                  <View style={{ flexDirection: "row", marginTop: 5, gap: 4 }}>
                    <Text>
                      <Entypo name="location-pin" size={20} color="gray" />
                    </Text>
                    <Text style={{ color: "gray" }}>Scapcana</Text>
                  </View>
                </View>
              </View>
              <Text>
                <AntDesign name="right" size={20} color="gray" />
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 16,
                padding: 10,
                borderRadius: 25,
                backgroundColor: "white",
                shadowColor: "black",
                shadowOffset: {
                  height: 10,
                  width: 10,
                },
                shadowOpacity: 1,
                shadowRadius: 1,
                elevation: 2,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
              >
                <Image
                  borderRadius={20}
                  height={90}
                  width={90}
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/1e1f/ab5f/9967bbde06bd73f819c855e70413fb00?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gz9mJfFu3RZCPvcYxeGTrC9apQ~CsLLzcLXX8JwZBlBH732iUCk1NYztG1ThK3sJkE19SNKd-~XOvMcnNoNwTCWgYXFBqJWLszL8l9X6o9qRYcqq1XGpcZL8VmbgR6ppm5tR3rWOB3nQOaCzvvq6FLMZJWnC~RZd56OXbLVtUbGaVzi~scxffOvQLLd1QsmVSVl~oLP~0eFUGn~V-UuyQVwymM2RNCqdj1sM1E0wBj42Q~8cRMQIXZYh~HL05e~WvPSlvG9t4~srC0mC6jjVAomWqWWkGITypNSVsOA76QRXhd8BJ2QcNql7edpjoRCjmmaVs4HjPYX3MWFj4T5O2g__",
                  }}
                />
                <View>
                  <View
                    style={{ flexDirection: "row", gap: 4, marginBottom: 8 }}
                  >
                    <Text>
                      <Feather name="calendar" size={20} color="gray" />
                    </Text>
                    <Text style={{ color: "gray" }}>26 June 2024</Text>
                  </View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#144F59",
                      fontSize: 18,
                    }}
                  >
                    PT-171
                  </Text>
                  <View style={{ flexDirection: "row", marginTop: 5, gap: 4 }}>
                    <Text>
                      <Entypo name="location-pin" size={20} color="gray" />
                    </Text>
                    <Text style={{ color: "gray" }}>Scapcana</Text>
                  </View>
                </View>
              </View>
              <Text>
                <AntDesign name="right" size={20} color="gray" />
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 16,
                padding: 10,
                borderRadius: 25,
                backgroundColor: "white",
                shadowColor: "black",
                shadowOffset: {
                  height: 10,
                  width: 10,
                },
                shadowOpacity: 1,
                shadowRadius: 1,
                elevation: 2,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
              >
                <Image
                  borderRadius={20}
                  height={90}
                  width={90}
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/3a78/f6f0/91f39cdaa9ee3b8c92c1e738d0fe410b?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WCBNjRKd8H-lfFrg9BWfNbK5q1bN1AOv8ILzNoz5XUFv3Aqp0OS4J96n22HtYB9wtD0JaTlVco0~4ViLv0Tn693Y5UH9roJyXSA7KFD9xpZs94UgNP6opMUIqH9SmuWN0UZ~2pP0PJtXy5fCWeyu0B8v6xCFUdCaX6kanx69My8qBmY1VhM07fmkuByl3TQqnrJMaAjkm1QJ6zNdt7mmaPUQI4Y9n2PJTkeAegbX7DbFcE-aqXDnGxWtb9lM1QTg1i-7nsM1Y~bpCQ001smxCBAb4JaMNEv8ZXVcaD8ewFMkTlK5z8dwmAJFGQoSRx3dxD2g1hICRhdBNC2zqoDUfA__",
                  }}
                />
                <View>
                  <View
                    style={{ flexDirection: "row", gap: 4, marginBottom: 8 }}
                  >
                    <Text>
                      <Feather name="calendar" size={20} color="gray" />
                    </Text>
                    <Text style={{ color: "gray" }}>26 June 2024</Text>
                  </View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#144F59",
                      fontSize: 18,
                    }}
                  >
                    PT-171
                  </Text>
                  <View style={{ flexDirection: "row", marginTop: 5, gap: 4 }}>
                    <Text>
                      <Entypo name="location-pin" size={20} color="gray" />
                    </Text>
                    <Text style={{ color: "gray" }}>Scapcana</Text>
                  </View>
                </View>
              </View>
              <Text>
                <AntDesign name="right" size={20} color="gray" />
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TabBar navigation={navigation} />
    </>
  );
}
