import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { AudioBookItem } from "../components/AudioBookItem";

export function Home() {
  const { colors } = useTheme();

  const data = [
    {
      id: "1",
      name: "Blood of Olympus",
      cover:
        "https://res.cloudinary.com/djkhalid/image/upload/v1623535951/blood_of_olympus_zasyt4.jpg",
    },
    {
      id: "2",
      name: "Homeland",
      cover: "https://res.cloudinary.com/djkhalid/image/upload/v1640660030/Cover_v9au9x.jpg"
    }
  ];

  const renderItems = ({ item }) => (
    <AudioBookItem name={item.name} image={item.cover} />
  );

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: colors.background }}
    >
      <StatusBar style="light" />
      <FlatList 
        renderItem={renderItems} 
        data={data} 
        numColumns={2} 
        keyExtractor={(item) => item.id} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {},
});
