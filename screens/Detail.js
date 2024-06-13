import React from "react";
import { View, Text, Button } from "react-native";

const DetailScreen = ({ route, navigation }) => {
  const { todo, setTodos } = route.params;

  const handleDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === todo.id ? { ...item, done: !item.done } : item
      )
    );
    navigation.goBack();
  };

  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todo.id));
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>{todo.text}</Text>
      <Text>{todo.done ? "Done" : "Not Done"}</Text>
      <Button title="Toggle Done" onPress={handleDone} />
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

export default DetailScreen;
