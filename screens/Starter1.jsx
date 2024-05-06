import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const { height } = Dimensions.get("window");
export default function Starter1({ navigation }) {
  const [screen, setScreen] = useState(1);
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("Login")} style={styles.skip}>
        Skip
      </Text>
      <View style={styles.img}>
        {screen === 1 ? (
          <Image
            height={430}
            source={{
              uri: "https://www.letsroam.com/explorer/wp-content/uploads/sites/10/2021/10/travel-tips-feature.jpg",
            }}
          />
        ) : (
          <Image
            height={430}
            source={{
              uri: "https://jetsetjansen.com/wp-content/uploads/2023/07/philippines-travel-guide.jpg",
            }}
          />
        )}
      </View>
      <View style={styles.intro_txt_container}>
        <Image style={styles.incline} source={require("../incline.png")} />
        <Text style={styles.intro_txt}>
          {screen === 1
            ? "Life is short and the world is"
            : "It’s a big world out there go "}
          <Text style={styles.wide}>{screen === 1 ? " wide" : "explore"}</Text>
        </Text>
        <Text style={styles.discover}>
          {screen === 1
            ? "Discover villas and cottages to book"
            : "To get the best of your adventure you just need to leave and go where you like. we are waiting for you"}
        </Text>
        <Text style={styles.with_us}>with us in Sapanca</Text>
        <View style={styles.small_line_container}>
          <Text
            style={
              screen === 1 ? styles.small_line_first : styles.small_line_second
            }
          ></Text>
          <Text
            style={
              screen === 1 ? styles.small_line_second : styles.small_line_first
            }
          ></Text>
        </View>
        <TouchableOpacity
          onPress={() => setScreen(2)}
          style={styles.get_started}
        >
          <View>
            {screen === 1 ? (
              <Text style={styles.get_started_txt}>Get Started</Text>
            ) : (
              <Text
                onPress={() => navigation.navigate("Login")}
                style={styles.get_started_txt}
              >
                Next
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
    backgroundColor: "white",
  },
  skip: {
    position: "absolute",
    color: "black",
    zIndex: 100,
    right: 0,
    margin: 20,
    fontSize: 14,
    color: "#F7C72C",
    backgroundColor: "#13FFB063",
    height: 20,
    width: 40,
    borderRadius: 999,
    textAlign: "center",
    fontWeight: "bold",
  },
  img: {
    borderBottomEndRadius: 35,
    borderBottomLeftRadius: 35,
    overflow: "hidden",
  },
  intro_txt: {
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
    color: "#144F59",
  },
  intro_txt_container: {
    padding: 20,
    marginTop: 10,
    alignItems: "center",
  },
  wide: {
    fontWeight: "bold",
    color: "#F99D1B",
  },
  incline: {
    height: 10,
    width: 100,
    position: "absolute",
    top: 109,
    right: 90,
  },
  discover: {
    marginTop: 30,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    opacity: 0.6,
  },
  with_us: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    opacity: 0.6,
  },
  small_line_container: {
    marginTop: 60,
    flexDirection: "row",
    gap: 5,
  },
  small_line_first: {
    width: 35,
    height: 10,
    backgroundColor: "#21BA90",
    borderRadius: 999,
  },
  small_line_second: {
    width: 20,
    height: 10,
    backgroundColor: "#CAEAFF",
    borderRadius: 999,
  },
  get_started: {
    marginTop: 40,
    backgroundColor: "#FA9D1C",
    width: 360,
    paddingVertical: 15,
    borderRadius: 10,
  },
  get_started_txt: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
