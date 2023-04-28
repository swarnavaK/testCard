import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, FlatList, Animated} from 'react-native';
import Onboardingitem from './Onboardingitem';
import slides from '../slides';
import Paginator from './Paginator';

export default Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentageThreshold: 50}).current;

  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          style={styles.carousel}
          data={slides}
          renderItem={({item}) => <Onboardingitem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
          ref={slidesRef}
        />
      </View>
      {/*  <Paginator data={slides} scrollX={scrollX} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  /* carousel: {maxHeight: 300}, */
});
