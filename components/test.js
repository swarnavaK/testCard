import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import slides from '../slides';
import Onboardingitem from './Onboardingitem';

const FlatListDemo = () => {
  return (
    <FlatList
      style={styles.carousel}
      data={slides}
      renderItem={({item}) => <Onboardingitem item={item} />}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    padding: 30,
    backgroundColor: 'blue',
    margin: 20,
    color: 'white',
  },
  carousel: {},
});

export default FlatListDemo;
