import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import VPS from "react-native-visual-positioning-system";
import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  Button,
  Alert,
  type EventSubscription,
} from "react-native";

export default function App() {
  const [result, setResult] = useState<number | null>(null);
  const listenerSubscription = useRef<EventSubscription | null>(null);

  useEffect(() => {
    // @ts-expect-error The TurboModule guide shows a new way to handle events
    // that might not align with the Spec's type definition yet.
    listenerSubscription.current = VPS?.onValueChanged((value: number) => {
      Alert.alert(`Result from event: ${value}`);
    });

    return () => {
      listenerSubscription.current?.remove();
    };
  }, []);

  const handlePress = async () => {
    const value = await VPS?.add(3, 7);
    console.log("Result from native module:", value);
    setResult(value ?? null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>
        React Native Visual Positioning System Example
      </Text>
      <Text style={{ margin: 20 }}>3+7={result ?? "??"}</Text>
      <Button title="Compute" onPress={handlePress} />
    </SafeAreaView>
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

