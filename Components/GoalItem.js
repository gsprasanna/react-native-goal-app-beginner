import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = ({ title, onDelete, goalId }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onDelete.bind(this, goalId)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "black"
  }
});

export default GoalItem;
