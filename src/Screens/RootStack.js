import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTap';
import WriteScreen from './WriteScreen';
import TypeOfTaro from './TypeOfTaro';
import SelectOneTaro from './SelectOneTaro';

import SelectThreeTaro1 from './SelectThreeTaro1';
import SelectThreeTaro2 from './SelectThreeTaro2';
import SelectThreeTaro3 from './SelectThreeTaro3';

import ResultOneTaro from './ResultOneTaro';

import ResultThreeTaro1 from './ResultThreeTaro1';
import ResultThreeTaro2 from './ResultThreeTaro2';
import ResultThreeTaro3 from './ResultThreeTaro3';

import WriteScreen2 from './WriteScreen2';
import CalandarScreen from './CalandarScreen';
import InventoryFeed from './InventoyuFeed';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Write2"
        component={WriteScreen2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TypeOfTaro"
        component={TypeOfTaro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectOneTaro"
        component={SelectOneTaro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectThreeTaro1"
        component={SelectThreeTaro1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectThreeTaro2"
        component={SelectThreeTaro2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectThreeTaro3"
        component={SelectThreeTaro3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResultOneTaro"
        component={ResultOneTaro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResultThreeTaro1"
        component={ResultThreeTaro1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResultThreeTaro2"
        component={ResultThreeTaro2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResultThreeTaro3"
        component={ResultThreeTaro3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Calendar"
        component={CalandarScreen}
        options={{headerShown: false}}
        
      />
      
    </Stack.Navigator>
  );
}

export default RootStack;