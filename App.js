import { FitnessContext } from './Context';
import StackNavigator from './StackNavigator';
import { StatusBar } from 'expo-status-bar';
import { View, Platform, StatusBar as RNStatusBar } from 'react-native';

export default function App() {
  return (
    <FitnessContext>
      {/* Background view behind the StatusBar */}
      <View style={{
        flex: 1,
        backgroundColor: '#000',
        paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0
      }}>
        {/* Expo StatusBar */}
        <StatusBar style="light" translucent />
        <StackNavigator />
      </View>
    </FitnessContext>
  );
}
