import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeedsScreen from './FeedsScreen';
import CalandarScreen from './CalandarScreen';
import SearchScreen from './SearchScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainPage from './MainPage';
import MyPage from './MyPage';
import InventoryFeed from './InventoyuFeed';

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        
        activeTintColor: 'white',
      }}
      screenOptions={{
        tabBarStyle: { backgroundColor:"black" },
      }}
      >
        <Tab.Screen
        name="Tarot"
        component={MainPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="filter" size={size} color={color} />
          ), headerShown: false, 

        }}
      />
      <Tab.Screen
        name="Diary"
        component={FeedsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="notes" size={size} color={color} />
          ),headerShown: false, 
        }}
      />
      
      <Tab.Screen
        name="Inventory"
        component={InventoryFeed}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="inventory" size={size} color={color} />
          ),headerShown: false, 
        }}
      />
      
      <Tab.Screen
        name="Mypage"
        component={MyPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person" size={size} color={color} />
          ),headerShown: false, 
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;