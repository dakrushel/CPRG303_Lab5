import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = React.useState('');   //Part 2

  const handleAddTask = () => {
    if (taskText.trim() === '') return; //Should prevent blank tasks
    addTask(taskText);  //Call addTask from App.js with current value
    setTaskText('');    //Part 4: Clears the field once task is added
  };
  
  return (
    <View style={styles.form}>
        <TextInput style={styles.input} 
          placeholder="Add a new task..."
          onChangeText={(text) => setTaskText(text)}  //Updates real-time, no need for Save button
          value={taskText}  //ensures TextInput displays current value of taskText
        />
        <Button title= "Add Task" onPress={handleAddTask} />
    </View>
  );
};

export default ToDoForm

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
      },
});