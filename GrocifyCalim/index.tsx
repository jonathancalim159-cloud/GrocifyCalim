import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Jonathan Calim</Text>
      <Text style={styles.textstyle}>BSIT 2A</Text>

      <Link href={"/about"}>About</Link>
      <Link href={"/life"}>This is my life</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  textStyle: {
    fontSize: 30,
    color: "white",
  },
  textstyle: {
    fontSize: 30,
    color: "white"
  }
  
});
