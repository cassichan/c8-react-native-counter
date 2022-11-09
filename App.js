import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome firstName={'Cass'}/>
      <Text style={styles.bigText}>This is cool!</Text>
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darksalmon",
    alignItems: "center",
    justifyContent: "center",
  },

  bigText: {
    textAlign: "center",
    color: "white",
    fontSize: "55vw",
  },
});
