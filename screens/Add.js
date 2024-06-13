import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const AddScreen = ({ route, navigation }) => {
  const { setTodos } = route.params;
  const [text, setText] = useState("");

  const handleAdd = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text, done: false },
    ]);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Enter todo"
        value={text}
        onChangeText={setText}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};

export default AddScreen;
