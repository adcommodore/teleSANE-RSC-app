import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './screens/Home.js';
import Menu from './screens/Menu.js'
import ExpandableChecklist from './screens/ExpandableChecklist.js';
import LawEnforcementSearch from './screens/LawEnforcementSearch.js';



const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Checklist" component={ExpandableChecklist} />
        <Stack.Screen name="LawEnforcementSearch" component={LawEnforcementSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
