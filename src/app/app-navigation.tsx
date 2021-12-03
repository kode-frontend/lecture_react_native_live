import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Todolist } from '@pages/todolist';
import { CreateTodo } from '@pages/create-todo';
import { NavigationParamsList } from 'types';
import { NavigationAddButton } from '@pages/todolist/navigation-add-button';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native';


const Stack = createNativeStackNavigator<NavigationParamsList>();

const Tabs = createBottomTabNavigator();

export const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName={'todolist'}>
      <Stack.Screen 
        name="todolist" 
        component={Todolist} 
        options={({ navigation }) => ({
          title: 'TODOLIST',
          headerRight: () => <NavigationAddButton />
        })}
      />
      <Stack.Screen 
        name="create" 
        component={CreateTodo} 
        options={{
        }}
      />
    </Stack.Navigator>
  );
};

export const AppNavigation = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen 
        name="home" 
        component={HomeScreen} 
      />
      <Tabs.Screen 
        name="settings"
      >{() => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings</Text>
        </View>
      )}</Tabs.Screen>
    </Tabs.Navigator>
  );
};
