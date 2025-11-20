import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Detalles from './screens/detalle'; // Cambié a mayúscula inicial para convención
import ProfileScreen from './screens/profile'; // Renombré para evitar conflicto con el Stack component
import Home from './screens/home';
import Settings from './screens/settings';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function ProfileStack() {
  return (
    <Stack.Navigator 
      initialRouteName="Perfil" 
    >
      <Stack.Screen name="Perfil" component={ProfileScreen} />
      <Stack.Screen name="Detalles" component={Detalles} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'ProfileStack') { // 🔄 Cambiar a ProfileStack
              iconName = 'person';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            }
            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#0033FF',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingBottom: 5,
            height: 60,
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        {/* 🔄 Usar el componente ProfileStack para la pestaña Profile */}
        <Tab.Screen name="ProfileStack" component={ProfileStack} options={{ title: 'Profile' }} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}