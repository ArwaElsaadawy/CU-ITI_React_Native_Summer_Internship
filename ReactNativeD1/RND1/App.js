import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Image, TouchableHighlight, View, Dimensions, BackHandler } from 'react-native';

export default function App() {
  const images = [
    'https://plus.unsplash.com/premium_photo-1709311452427-fff3030eabbf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    require('./assets/1.jpg'),
    require('./assets/2.jpg'),
    require('./assets/3.jpg'),
    require('./assets/4.jpg'),
    require('./assets/5.jpg'),
    require('./assets/6.jpg'),
    require('./assets/7.jpg'),
    require('./assets/8.jpg'),
    require('./assets/9.jpg'),
    require('./assets/10.jpg'),
    require('./assets/11.jpg'),
    'https://plus.unsplash.com/premium_photo-1709311452427-fff3030eabbf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    require('./assets/1.jpg'),
    require('./assets/2.jpg'),
    require('./assets/3.jpg'),
    require('./assets/4.jpg'),
    require('./assets/5.jpg'),
    require('./assets/6.jpg'),
    require('./assets/7.jpg'),
    require('./assets/8.jpg'),
    require('./assets/9.jpg'),
    require('./assets/10.jpg'),
    require('./assets/11.jpg'),
    'https://plus.unsplash.com/premium_photo-1709311452427-fff3030eabbf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    require('./assets/1.jpg'),
    require('./assets/2.jpg'),
    require('./assets/3.jpg'),
    require('./assets/4.jpg'),
    require('./assets/5.jpg'),
    require('./assets/6.jpg'),
    require('./assets/7.jpg'),
    require('./assets/8.jpg'),
    require('./assets/9.jpg'),
    require('./assets/10.jpg'),
    require('./assets/11.jpg')
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null); 
  const scrollViewRef = useRef(null); 

  const handleImagePress = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index); 
  };

  const handleBackToGallery = () => {
    setSelectedImage(null);
    setSelectedIndex(null);
  };

  useEffect(() => {
    const handleBackPress = () => {
      if (selectedImage) {
        handleBackToGallery();
        return true; 
      }
      return false;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [selectedImage]);

  useEffect(() => {
    if (selectedImage && selectedIndex !== null && scrollViewRef.current) {
      // Scroll to the selected image when it's set
      scrollViewRef.current.scrollTo({ x: Dimensions.get('window').width * selectedIndex, animated: true });
    }
  }, [selectedImage, selectedIndex]);

  return (
    <SafeAreaView style={styles.container}>
      {selectedImage ? (
        <View style={styles.fullScreenContainer}>
          <ScrollView 
            ref={scrollViewRef}
            style={styles.scrollContainer} 
            horizontal 
            pagingEnabled
          >
            {images.map((image, index) => (
              <Image 
                key={index} 
                style={styles.fullImage} 
                source={typeof image === 'string' ? { uri: image } : image} 
              />
            ))}
          </ScrollView>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.gallery}>
          {images.map((image, index) => (
            <TouchableHighlight 
              key={index} 
              onPress={() => handleImagePress(image, index)}
              underlayColor="#ddd"
            >
              <Image style={styles.image} source={typeof image === 'string' ? { uri: image } : image} />
            </TouchableHighlight>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const { width, height } = Dimensions.get('window'); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  fullScreenContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollContainer: {
    flex: 1,
  },
  fullImage: {
    width: width, // Make the image fit the screen width
    height: height, // Make the image fit the screen height
    resizeMode: 'contain', // Maintain the aspect ratio
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    backgroundColor: '#6c0000',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
