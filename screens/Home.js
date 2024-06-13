// screens/Home.js
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([
    { id: "1", text: "Buy groceries", done: false },
    { id: "2", text: "Walk the dog", done: false },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate("Detail", { todo: item, setTodos })
            }
          >
            <Text style={[styles.text, item.done && styles.doneText]}>
              {item.text}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No todos available</Text>
        }
      />
      <Button
        title="Add Todo"
        onPress={() => navigation.navigate("Add", { setTodos })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 18,
  },
  doneText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "gray",
  },
});

export default HomeScreen;
