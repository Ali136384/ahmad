import TabBar from "./TabBar";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import { MaterialIcons } from "@expo/vector-icons";
const { height } = Dimensions.get("window");
export default function Home({ navigation }) {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d725232",
      title: "Third Item",
    },
  ];
  return (
    <View>
      <ScrollView style={s.container}>
        <View>
          <View style={s.top_image_name}>
            <Image
              borderRadius={999}
              height={32}
              width={32}
              source={{
                uri: "https://cours-informatique-gratuit.fr/wp-content/uploads/2017/10/avatar.png",
              }}
            />
            <Text style={s.name}>Ahmet</Text>
          </View>
          <View style={s.head_txt_container}>
            <Text style={s.head_txt1}>Find your stay </Text>
            <Text style={s.head_txt2}>
              with us in <Text style={s.sapanca}>Sapanca</Text>
            </Text>
          </View>
          <View>
            <View style={s.list_head}>
              <Text style={s.list_head_txt1}>Best Destination</Text>
              <Text style={s.list_head_txt2}>View all</Text>
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={DATA}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Details")}
                  >
                    <View
                      style={{
                        marginBottom: 15,
                        backgroundColor: "white",
                        marginRight: 29,
                        borderRadius: 20,
                        padding: 20,
                        shadowColor: "black",
                        shadowOffset: {
                          width: 1,
                          height: 1,
                        },
                        shadowOpacity: 1,
                        shadowRadius: 1,
                        elevation: 1,
                        marginTop: 15,
                      }}
                    >
                      <View
                        style={{
                          position: "absolute",
                          right: 30,
                          top: 30,
                          zIndex: 100,
                          backgroundColor: "#1B1E2818",
                          borderRadius: 999,
                          width: 35,
                          height: 35,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <MaterialIcons
                          name="favorite-border"
                          size={24}
                          color="white"
                        />
                      </View>
                      <Image
                        borderRadius={20}
                        height={285}
                        width={268}
                        source={{
                          uri: "https://s3-alpha-sig.figma.com/img/435c/561d/d1ea2a4643541a082e29f3f3156f70d7?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lacvZmvOt716aVnn~ykJ3K9B6t9WTvZOCqeDpR9yOqLSB4xR-JiMDJXmbyWhY5Ah8wA1UAo9W-xmXbXr4cq0QbuzRn7LV1WDoEpEJVp6FsNH327T0Kl1yZbx9AUqRJ2FZtJsy1U3n-RgjtWrOoC41E1nu8jhK0O5Q0WrfmlWgOMku7SIveuz9PVc2OU4XGo8Ev7PR0gb2Mm2iwK2mEHaT-yTFlAUq12to9pRNlCzzRuMqWYw91TLbwpiksCk0Czbn~XkeqI4xE0tP~9gxDa2HYNm7COzn-iTTf5KWldWVJimG~Y7OHD3AP-eb1eTZZyx8IiFI4t5VNibBCCHgSj-eQ__",
                        }}
                      />
                      <View
                        style={{
                          marginLeft: 20,
                          overflow: "hidden",
                        }}
                      ></View>

                      <View
                        style={{
                          marginTop: 20,
                          flexDirection: "column",
                          alignItems: "baseline",
                          padding: 10,
                        }}
                      >
                        <Text style={{ color: "#7D848D", marginBottom: 6 }}>
                          PT-190
                        </Text>
                        <View style={{ flexDirection: "row", left: -5 }}>
                          <EvilIcons name="location" size={24} color="black" />
                          <Text style={{ color: "#7D848D" }}>
                            Sapanca ,Turkey
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ScrollView>
      <TabBar navigation={navigation} />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    height: height - 100,
    padding: 20,
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
  top_image_name: {
    backgroundColor: "#7C7C7C25",
    width: 100,
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 6,
  },
  name: {
    marginRight: 18,
  },
  head_txt_container: {
    marginTop: 20,
    gap: 12,
  },
  head_txt1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#144F59",
  },
  head_txt2: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#144F59",
  },
  sapanca: {
    color: "#FA9D1C",
  },
  list_head: {
    marginTop: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  list_head_txt1: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#144F59",
  },
  list_head_txt2: {
    color: "#FA9D1C",
    fontSize: 17,
  },
});
