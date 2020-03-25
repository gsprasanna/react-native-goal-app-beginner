import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoalHandler = goal => {
    // this is perfect way to set the state which makes us 100% guarenteed that current state get updated
    setGoalList(currentGoals => [
      ...goalList,
      { key: Math.random().toString(), value: goal }
    ]);
    setModalVisible(false);
  };

  const removeGoalHandler = goalId => {
    setGoalList(currentGoals => {
      return goalList.filter(goal => goal.key !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.screen}>
      <Button
        title="ADD NEW GOAL"
        onPress={() => {
          setModalVisible(true);
        }}
      />
      <GoalInput
        isVisible={modalVisible}
        txtPlaceholder={"Enter the Goal"}
        btnTitle="ADD"
        addGoalHandler={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={goalList}
        renderItem={itemData => (
          <GoalItem
            title={itemData.item.value}
            goalId={itemData.item.key}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 60
  }
});
