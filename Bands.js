import { StyleSheet, Text, View, FlatList } from 'react-native';

import './metal.json'

const Item = ({ index, item }) => {
  const bandFans = item.fans * 1000;
  const bandNameStyle = item.split.length > 1 ? styles.bandName : styles.bandNameSplit;
  return (
    <View style={styles.band} key={index}>
      <View style={styles.flexRow}>
        <Text style={bandNameStyle}>{item.band_name}</Text>
        <Text style={styles.origin}>{item.origin}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.formed}>{item.formed}</Text>
        <Text style={styles.fans}>{bandFans.toLocaleString()}</Text>
      </View>
    </View>
  );
};

export default function Bands() {
  const metalBands = require('./metal.json');
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
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#999'
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  bandName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
  bandNameSplit: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 18,
    textDecorationLine: 'line-through'
  },
  origin: {
    color: '#999',
    fontSize: 18
  },
  formed: {
    color: 'white',
    fontSize: 14
  },
  fans: {
    color: 'white',
    fontSize: 14
  }
});
