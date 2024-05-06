import TabBar from "./TabBar";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import React from "react";

const { height } = Dimensions.get("window");
export default function Home() {
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
                  <>
                    <Text>{item.id}</Text>
                  </>
                );
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ScrollView>
      <TabBar />
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#144F59",
  },
  list_head_txt2: {
    color: "#FA9D1C",
  },
});
