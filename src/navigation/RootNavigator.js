import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import screens
import Home from '../screens/Home';
import NewPost from '../screens/NewPost';
import Login from '../screens/Login';
import {colors} from '../shared/Colors';
import {StatusBar,} from 'react-native';
const Stack = createStackNavigator();
const tabBarOptions = {
  showLabel: false,
  activeTintColor: '#9381ff',
  style: {
    height: '10%',
  },
};
const RootNavigator = () => {
  
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.gradientColor3} />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.gradientColor3,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="NewPost" component={NewPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
