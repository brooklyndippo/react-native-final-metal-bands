import { StyleSheet, Text, View, FlatList } from 'react-native';

import './metal.json'

export default function MetalStyles() {
    const metalBands = require('./metal.json')

    let allStyles = []
    metalBands.forEach((band) =>  {
      const styles = band.style.split(',')
      styles.forEach((style) => {
        allStyles.push(style)
      })
    })

    const uniqueStyles = allStyles.reduce((styles, style) => {
      if (!styles.includes(style)) {
        styles.push(style)
      }
      return styles
    }, [])

    const Item = ({ index, item }) => {
      return (
        <View style={styles.itemContainer} key={index}>
          <Text style={styles.item}>{item}</Text>
        </View>
      );
    };
    
    return (
      <View style={styles.container}>
      <FlatList
        data={uniqueStyles}
        renderItem={({ item, index }) => <Item item={item} index={index}/>}
        keyExtractor={(item) => item}
      />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  itemContainer: {
    color: '#fff',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#999'
  },
  item: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  }
});
