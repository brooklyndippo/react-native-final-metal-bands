import { StyleSheet, Text, View, FlatList } from 'react-native';

import './metal.json'

const Item = ({ index, item }) => {
  const bandFans = item.fans * 1000;
  return (
    <View style={styles.band} key={index}>
      <View style={styles.flexRow}>
        <Text style={styles.bandName}>{item.band_name}</Text>
        <Text style={styles.origin}>{item.origin}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.p}>{item.formed}</Text>
        <Text style={styles.p}>{bandFans.toLocaleString()}</Text>
      </View>
    </View>
  );
};

export default function Bands() {
  const metalBands = require('./metal.json');
  console.log(metalBands);
  return (
    <View style={styles.container}>
      <Text>BANDS BANDS BANDS</Text>
      <FlatList
        data={metalBands}
        renderItem={({ item, index }) => <Item item={item} index={index}/>}
        keyExtractor={(item) => item.ID.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  band: {
    color: '#fff',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bandName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
  origin: {
    color: 'lightgray',
    fontSize: 18
  },
  p: {
    color: 'white',
    fontSize: 16
  }
});
