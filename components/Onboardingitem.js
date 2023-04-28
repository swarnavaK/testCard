import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import React from 'react';

export default function Onboardingitem({item}) {
  const {height, width, scale, fontScale} = useWindowDimensions();
  return (
    <View>
      {/* <Image source={item.image} style={styles.image} /> */}
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.description}>{item.category?.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    /* width: width, */
    /* 
    width: 100,
    height: 100,
    resizeMode: 'contain', */
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    fontSize: 20,
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});
