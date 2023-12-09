import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import PostTemplate from './PostTemplate';

class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.fixedTopMenu}>
          <View style={styles.topMenu}>
            <TouchableOpacity>
              <Image style={styles.icon} source={require('./assets/friends.png')} />
            </TouchableOpacity>
            <Image source={require('./assets/gendiary.png')} style={styles.logo} />
            <TouchableOpacity style={styles.profile_button}>
              <Image style={styles.profile_button} source={require('./assets/images/stockprofile.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <PostTemplate
          username="ugursaatcii"
          description={"Bugün Müq"}
          image={require('./assets/images/post1.jpeg')}
          pimage={require('./assets/images/stockprofile.png')}
        />
        <PostTemplate
          username="ilayda.ddmrl"
          description={"İnanılmaz bir gün"}
          image={require('./assets/images/post2.jpeg')} 
          pimage={require('./assets/images/stockprofile2.jpeg')}
        />
        <PostTemplate
          username="selamin"
          image={require('./assets/images/post3.jpeg')} 
          pimage={require('./assets/images/stockprofile3.jpeg')}
          description={"Benden başka bir şey istemiyorsan yatıyorum"}
        />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fixedTopMenu: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  topMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Arka plan rengini ayarlayabilirsiniz
  },
  scrollContainer: {
    paddingTop: 50, // Sabit menü yüksekliği kadar bir üst boşluk ekler
   
  },
  icon: {
    marginTop: 5,
  },
  logo: {
    height: 35,
  },
  profile_button: {
    backgroundColor: '#09333f',
    padding: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#effaf6',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Feed;
