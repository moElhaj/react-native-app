import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Button } from 'react-native';

import GlobalProvider from "./context/Global";
import MatchesScreen from "./screens/MatchesScreen";
import StandingsScreen from "./screens/StandingsScreen";

const Stack = createStackNavigator();

export default function App() {


  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Matches"
            component={MatchesScreen}
            options={({ navigation }) => ({
              headerStyle: {
                backgroundColor: '#39003D',
              },
              headerTintColor: '#fff',
              headerRight: () => (
                <View style={{ marginRight: 10 }}>
                  <Button
                    onPress={() => navigation.navigate('Standings')}
                    title="Standings"
                    color="#FF015B"
                  />
                </View>
              ),
            })}
          />
          <Stack.Screen
            name="Standings"
            component={StandingsScreen}
            options={{
              headerStyle: {
                backgroundColor: '#39003D',
              },
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}