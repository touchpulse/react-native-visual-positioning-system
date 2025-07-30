import { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
// import VisualPositioningSystem from "react-native-visual-positioning-system";

export default function Index() {
  useEffect(() => {
    // Log the module to check if it's loaded correctly.
    // console.log("VisualPositioningSystem module:", VisualPositioningSystem);
  }, []);

  const handlePress = () => {
    // VisualPositioningSystem?.printMsg("Hello from my app!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        React Native Visual Positioning System Example
      </Text>
      <Button title="Print Message" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 16,
  },
});

