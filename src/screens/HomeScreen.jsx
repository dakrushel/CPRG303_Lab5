import React from 'react';
import { Button, Text, View, StyleSheet, } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = React.useState([]);
  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, isCompleted: false}])
  };
  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  }

  return (
    <MainLayout>
      <Text style={styles.headerText}>Welcome to the Incredible To-Do List App</Text>
      {/* Render ToDoList and ToDoForm components */}
      <ToDoList tasks={tasks} toggleComplete={toggleComplete} />
      <ToDoForm addTask={addTask} />
      <View style={styles.buttonContainer}>
        <Button title="About" onPress={() => navigation.navigate('About')} />
      </View>
    </MainLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    margin: 20,
    alignSelf: 'flex-start', // Optional: Align button to the left
  },
});