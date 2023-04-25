    
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './screens/index';
import LoginScreen from './screens/login';
const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index'>
        <Stack.Screen name='Index' component={IndexScreen} options={{title:'Home | Page',
        headerTitleAlign:'center',
        headerStyle:{
          backgroundColor:'red',
        },
        headerTintColor:'white'
      }}/>
        <Stack.Screen name='Login' component={LoginScreen} options={{title:'Login | Register'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

