import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import TobTabNavigation from './navigatin/TobTabNavigation';
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import { globalStyles } from './styles/globalStyles';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    const prepareApp = async () => {
      try {
        // Keep the splash screen visible while loading resources
        await SplashScreen.preventAutoHideAsync();
        // Simulate a delay (for resource loading, etc.)
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide the splash screen once resources are loaded
        await SplashScreen.hideAsync();
      }
    };

    prepareApp();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeTabs" 
          component={TobTabNavigation} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="MovieDetails" 
          component={MovieDetailsScreen} 
          options={{ title: 'Movie Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
