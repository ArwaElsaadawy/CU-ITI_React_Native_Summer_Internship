import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const cardWidth = windowWidth / 3 - 15; // Adjust width for 3 cards per row

export const movieCardStyles = StyleSheet.create({
  card: {
    position: 'relative',
    backgroundColor: '#a10000',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    color: '#ffffffee',
    width: cardWidth,
    // Shadow properties
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  hovered: {
    // Apply scale effect with Animated API if needed
  },
  image: {
    width: '100%',
    height: 150, // Adjust height for better visibility
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  overview: {
    fontSize: 12,
    color: '#fff',
  },
  releaseDate: {
    fontSize: 10,
    color: '#fff',
  },favoriteIcon: {
    marginTop: 10, // Adds some space above the icon
    alignSelf: 'flex-end', // Aligns the icon to the right
    shadowColor: '#000',  // Adds a subtle shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,  // Adds shadow for Android
  },
});
