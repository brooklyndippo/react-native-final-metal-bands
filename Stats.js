import { StyleSheet, Text, View } from 'react-native';

export default function Stats() {
  return (
    <View style={styles.container}>
      <Text>STATS STATS STATS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
