import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default function IndexScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Маргаашаас эхлэх Польшийн ерөнхийлөгчийн айлчлалын үеэр түр ХААГДАХ замууд!</Text>
      <Image style={styles.img} source={{uri:'https://images.pexels.com/photos/3733269/pexels-photo-3733269.jpeg?auto=compress&cs=tinysrgb&w=1600'}}/>
      <View style={{color:'blue'}}><Text>Айлчлалын үеэр буюу дөрөвдүгээр 24-26-ны өдрүүдэд цагдаагийн байгууллагаас замын хөдөлгөөний хамгаалалт, зохицуулалтыг хийж Чингисийн өргөн чөлөө, Энхтайваны өргөн чөлөө, Б</Text></View>
      <StatusBar style="auto" />
      <Button title='Login huudas' onPress={()=>navigation.navigate('Login')}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  txt:{
    color:'green',
    fontSize:16,
    fontWeight:'bold'
  },
  img:{
    width:'100%',
    height:'20%',
    borderTopLeftRadius:'20%',
    marginTop:15,
    borderBottomRightRadius:'20%',
    marginBottom:10
  }
});
