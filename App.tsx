import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Platform,
  FlatList,
  Image,
} from 'react-native';

const CARD_WIDTH = Dimensions.get('window').width * 0.8;
const CARD_HEIGHT = Dimensions.get('window').height * 0.4;
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 10;

type CardType = {
  title: string;
  description: string;
  image: string;
  id: string;
  category: string;
};

const cards = [
  {
    id: '1',
    title: 'Smart point of sale',
    description:
      'Complete point of sale software tailored to your business needs',
    image: require('./assets/images/computer.png'),
    category: 'fashion',
  },
  {
    id: '2',
    title: 'Quick and Easy payments',
    description:
      'Complete point of sale software tailored to your business needs',
    image: require('./assets/images/creditcard.png'),
    category: 'finance',
  },
  {
    id: '3',
    title: 'Instant Notifications',
    description:
      'Complete point of sale software tailored to your business needs',
    image: require('./assets/images/notifications.png'),
    category: 'entertainment',
  },
  {
    id: '4',
    title: 'Customize Everything',
    description:
      'Complete point of sale software tailored to your business needs',
    image: require('./assets/images/customize.png'),
    category: 'sports',
  },
];

class App extends Component {
  _renderViews = (views: CardType[]): JSX.Element[] => {
    const {cardStyle} = styles;

    return views.map((card, index) => {
      return (
        <View style={cardStyle} key={index}>
          <Image
            source={card.image}
            style={styles.imageStyle}
            /* resizeMode={'contain'} */
          />
          <Text style={styles.check}>{card.title}</Text>
          <Text style={styles.description}>{card.description}</Text>
          <View style={styles.lineStyle} />
          <Text>Category:{card.category}</Text>
        </View>
      );
    });
  };

  render() {
    const {container} = styles;

    return (
      <React.Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={container}>
          <ScrollView
            horizontal // Change the direction to horizontal
            pagingEnabled // Enable paging
            decelerationRate={0} // Disable deceleration
            snapToInterval={CARD_WIDTH + 10} // Calculate the size for a card including marginLeft and marginRight
            snapToAlignment="center" // Snap to the center
            contentInset={{
              // iOS ONLY
              top: 0,
              left: SPACING_FOR_CARD_INSET, // Left spacing for the very first card
              bottom: 0,
              right: SPACING_FOR_CARD_INSET, // Right spacing for the very last card
            }}
            contentContainerStyle={{
              // contentInset alternative for Android
              paddingHorizontal:
                Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0, // Horizontal spacing before and after the ScrollView
            }}>
            {this._renderViews(cards)}
          </ScrollView>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 15,
  },
  imageStyle: {
    height: 120,
    width: 120,
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center',
  },
  check: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: '500',
    opacity: 0.7,
    letterSpacing: 0.15,
    textAlign: 'center',
    color: '#233d87',
  },
  description: {
    fontWeight: '300',
    fontSize: 18,
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10,
  },
});

export default App;
