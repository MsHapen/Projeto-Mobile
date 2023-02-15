import { StyleSheet, Text, View } from 'react-native';
export default function Header(){
    return(

    <View style={styles.header}>
      <Text style= {{ color: 'white', fontSize: 20}}>
      Minha Lista de Tarefas</Text>
      </View>
);
}

const styles = StyleSheet.create({
header: {
    backgroundColor: '#f29a30',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
}
  })