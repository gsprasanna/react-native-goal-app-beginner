import React, { useState } from "react";

import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = ({
  addGoalHandler,
  btnTitle,
  txtPlaceholder,
  isVisible,
  onCancel
}) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputChange = enteredtext => {
    setEnteredGoal(enteredtext);
  };

  const goalHandler = () => {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  const cancelGoalHandler = () => {
    onCancel();
    setEnteredGoal("");
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={txtPlaceholder}
          style={styles.input}
          onChangeText={goalInputChange}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title={btnTitle} onPress={goalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={cancelGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});

export default GoalInput;
