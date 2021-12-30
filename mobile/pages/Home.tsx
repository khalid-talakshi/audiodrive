import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { AudioBookItem } from "../components/AudioBookItem";
import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_BOOKS } from "./graphql/GetBooks";

type AudioBook = {
  _id: string;
  name: string;
  cover: string;
}

export function Home() {
  const { colors } = useTheme();
  const { data } = useQuery(GET_ALL_BOOKS);

  const renderItems = ({item }) => (
    <AudioBookItem name={item.name} image={item.cover} />
  );

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: colors.background }}
    >
      <StatusBar style="light" />
      {data && (
        <FlatList
          renderItem={renderItems}
          data={data.books}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      )}
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
