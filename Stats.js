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


    return (
      <View style={styles.container}>
        <Text style={styles.title}>METAL 🤘</Text>
        <Text style={styles.label}>Count: <Text style={styles.stat}>{totalBands}</Text></Text>
        <Text style={styles.label}>Count: <Text style={styles.stat}>{totalFans.toLocaleString()}</Text></Text>
        <Text style={styles.label}>Countries: <Text style={styles.stat}>{uniqueCountries.length}</Text></Text>
        <Text style={styles.label}>Active: <Text style={styles.stat}>{active}</Text></Text>
        <Text style={styles.label}>Split: <Text style={styles.stat}>{split}</Text></Text>
        <Text style={styles.label}>Styles: <Text style={styles.stat}>{uniqueStyles.length}</Text></Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  label: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }, 
  stat: {
    fontWeight: 'normal'
  }
});
