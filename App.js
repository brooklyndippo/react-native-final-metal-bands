import { SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import TabNavigator from './TabNavigator';

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <SafeAreaView>
      </SafeAreaView>
      <TabNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff'
  }
});