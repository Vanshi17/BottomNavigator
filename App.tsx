import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Image, Switch } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { stylesSheet } from './styles/Style.js';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          tabBarIcon: () => null, 
          tabBarIconStyle: { display: 'none' }, 
          tabBarLabelStyle: stylesSheet.tabBarLabel, 
          tabBarStyle: stylesSheet.tabBar, 
          tabBarItemStyle: stylesSheet.tabBarItem
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = () => (
  <View style={stylesSheet.container}>
    <Text style={stylesSheet.text}>Welcome to the Home Screen!</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={stylesSheet.container}>
    <Image 
      source={{ uri: 'https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?semt=ais_hybrid' }} 
      style={stylesSheet.avatar} 
    />
    <Text style={stylesSheet.name}>Vanshika Gupta</Text>
    <Text style={stylesSheet.bio}>React Native Developer</Text>
  </View>
);

const SettingsScreen = () => {
  const [notifications, setNotifications] = useState(false);
  const [autoUpdate, setAutoUpdate] = useState(true);

  return (
    <View style={stylesSheet.containersetting}>
      <View style={stylesSheet.setting}>
        <Text style={stylesSheet.text}>Enable Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>
      <View style={stylesSheet.setting}>
        <Text style={stylesSheet.text}>Auto Updates</Text>
        <Switch value={autoUpdate} onValueChange={setAutoUpdate} />
      </View>
    </View>
  );
};

export default App;
