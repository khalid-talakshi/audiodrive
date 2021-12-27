import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from '@react-navigation/native';

export function Home() {
  const {colors} = useTheme()

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <Text style={{...styles.text, color: colors.text}}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {}
  });