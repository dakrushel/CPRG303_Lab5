import {StyleSheet, Pressable, Text, View, ScrollView} from 'react-native';
import React from 'react'

const ToDoList = ({ tasks, toggleComplete }) => {
    if(tasks.length === 0) {
        return <Text>Click the add button to add a task!</Text>
    }
    return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index} onPress={() => toggleComplete(index)}>
          <View style={[styles.task, task.isCompleted && styles.completed]}>
            <Text style={styles.taskText}>{task.text}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default ToDoList

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
      },
      completed: {
        backgroundColor: '#e0e0e0',
      },
      taskText: {
        fontSize: 16,
      },
})    