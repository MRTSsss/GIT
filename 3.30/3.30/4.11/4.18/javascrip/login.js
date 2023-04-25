import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Login Form!</Text>
      <StatusBar style="auto" />
      <Button title='Home huudas' onPress={()=>navigation.navigate('Index')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
