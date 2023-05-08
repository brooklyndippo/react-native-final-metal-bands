import { StyleSheet, Text, View } from 'react-native';

import './metal.json'

export default function Stats() {
    const metalBands = require('./metal.json')

    const totalBands = metalBands.length
    const totalFans = metalBands.reduce((acc, cur) => acc + cur.fans, 0) * 1000
    const active = metalBands.filter((band) => band.split === '-').length
    const split = metalBands.filter((band) => band.split !== '-').length
    const uniqueCountries = metalBands.reduce((countries, band) => {
      if (!countries.includes(band.origin)) {
        countries.push(band.origin)
      }
      return countries
    }, [])
    const uniqueStyles = metalBands.reduce((styles, band) => {
      if (!styles.includes(band.style)) {
        styles.push(band.style)
      }
      return styles
    }, [])


    return (
      <View style={styles.container}>
        <Text>METAL 🤘</Text>
        <Text>Count: {totalBands}</Text>
        <Text>Count: {totalFans.toLocaleString()}</Text>
        <Text>Countries: {uniqueCountries.length}</Text>
        <Text>Active: {active}</Text>
        <Text>Split: {split}</Text>
        <Text>Countries: {uniqueStyles.length}</Text>
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
