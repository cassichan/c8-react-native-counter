import react, { useState } from "react";
import { Button, Text, StyleSheet } from "react-native";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Text styles={styles.mediumText}>Counter: {count}</Text>
      <Button
        title="Count + 1"
        onPress={() => {setCount(count + 1)}}
        color="#227266"
        accessibilityLabel="Count + 1"
      />
    </>
  );
}


const styles = StyleSheet.create({
    mediumText: {
        fontSize: 24,
        margin: 16,
    },
})