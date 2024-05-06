import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React, { useEffect } from "react";

const { height } = Dimensions.get("window");
export default function Starter({ navigation }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Starter1");
    }, 1500);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={require("../starter.png")} />
      </View>
      <Text style={styles.first_txt}>Panprama </Text>
      <Text style={styles.first_txt}>Tourism</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height + 50,
    backgroundColor: "#FA9D1C",
    margin: 0,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 194,
    width: 194,
  },
  first_txt: {
    top: 220,
    fontWeight: "bold",
    fontSize: 35,
    color: "white",
  },
});
