import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Counter from "./src/Counter";
import EventButton from "./src/components/EventButton";
import EventInput from "./src/components/EventInput";

export default function App() {
  return (
    <View style={styles.container}>
      <Counter />
      <EventButton />
        <EventInput />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
