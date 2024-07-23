import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { TabRoutes, StackRoutes } from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes/>
    </NavigationContainer>
  );
}