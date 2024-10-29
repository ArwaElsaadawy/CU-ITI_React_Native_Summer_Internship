import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, StyleSheet, SafeAreaView, Platform, Button, FlatList, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function App() {
  const [task, setTask] = useState({ detail: '', isDone: false });
  const [tasks, setTasks] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const addTask = () => {
    if (!task.detail.trim()) {
      setErrorMessage('Cannot add an empty task!');
      return;
    }
    if (task.detail.trim().length < 3) {
      setErrorMessage('Task must be at least 3 characters long!');
      return;
    }
    setTasks([...tasks, task]);
    setTask({ detail: '', isDone: false });
    setErrorMessage(''); 
  };

  const markTaskDone = (index) => {
    const updatedTasks = tasks.map((t, i) => {
      if (i === index) {
        return { ...t, isDone: !t.isDone };
      }
      return t;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const completedTasksCount = tasks.filter(task => task.isDone).length;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TextInput
        placeholder='Write your new task here...'
        value={task.detail}
        onChangeText={(txt) => setTask({ ...task, detail: txt })}
        style={styles.input}
      />
      <Button title="Add Task" onPress={addTask} />
      
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

      <Text style={styles.taskSummary}>
        {completedTasksCount} done of {tasks.length} tasks
      </Text>

      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Text style={item.isDone ? styles.taskDone : styles.taskText}>
              {item.detail}
            </Text>
            <CheckBox title="Done" checked={item.isDone} onPress={() => markTaskDone(index)}
               containerStyle={styles.checkBoxContainer}
               textStyle={styles.checkBoxText}
               checkedColor="#4CAF50" 
               uncheckedColor="#0081fa"
               size={24} 
               />
            <CheckBox title="Delete" onPress={() => deleteTask(index)}
               containerStyle={styles.checkBoxContainer}
               textStyle={styles.checkBoxText}
               checkedColor="#4CAF50"
               uncheckedColor="#f44336" 
               size={24}
              />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  taskSummary: {
    fontSize: 16,
    marginBottom: 10,
    paddingTop:10,
    textAlign: 'center',
    color: '#555',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'space-between',
  },
  taskText: {
    fontSize: 18,
    flex: 1,
    marginRight: 10,
  },
  taskDone: {
    fontSize: 18,
    flex: 1,
    marginRight: 10,
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  checkBoxContainer: {
    backgroundColor: '#fff',
    borderWidth: 0, 
    padding: 0, 
    margin: 0, 
  },
  checkBoxText: {
    fontSize: 16,
    marginLeft: 8, 
  },
});
