import { StyleSheet, Text, View } from 'react-native';

export default function Bands() {
  return (
    <View style={styles.container}>
      <Text>BANDS BANDS BANDS</Text>
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
