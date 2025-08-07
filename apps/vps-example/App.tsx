import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import VPS from "react-native-visual-positioning-system";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>VPS Example App {VPS.add(1, 2)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  vpsView: {
    width: "100%",
    height: 300,
    marginTop: 20,
  },
});
