import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./src/components/Header";

export default function App() {

  const tasks = ['task 1', 'task 2', 'task 3', 'task 4', 'task 5',];
  return (
    <View style={styles.container}>
      <Header/>
      <View>
    
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#575068',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#f29a30',
    Width: '100%',
    Height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
