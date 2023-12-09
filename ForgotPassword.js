import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput,TouchableOpacity } from 'react-native';
import App from './App';



export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showMessage: false
        };
      }
    
      handleSendPress = () => {
        this.setState({ showMessage: true });
      };
  render() {
    return (
        <View style={style.container}>
      
        <View><Image source={require('./assets/logo.png')} style={{marginTop:300, width:200,height:200}}></Image></View>
        <View>
          <View style={{ flex: 30, flexdirection: "column" }}>
            <TextInput style={style.text_box} placeholder="Email" placeholderTextColor='#effaf6' />
            <View style={{flexDirection: 'row', marginTop:30,justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={this.handleSendPress}
              style={style.button}>
              <Text style={style.buttonText}>Send</Text>
            </TouchableOpacity>
            </View>
            <View style={{marginTop:10, width:200}}>{this.state.showMessage && (
              
              <Text style={style.text_succes}>If you entered a registered Email, the Email has been sent successfully.</Text>
            )}</View>
          </View>
        </View>
      </View>
    );
  }
}
  
const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#09333f"
    },
    text_box: {
      height: 40,
      width: 200,
      borderColor: "#effaf6",
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 20,
      borderRadius: 20,
      fontSize: 20,
      color: '#effaf6'
    },
    text_style: {
      color: '#effaf6',
    },
    button: {
      backgroundColor: '#09333f',
      padding: 10,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#effaf6',
      width:90
    },
    
    image_style:{
      marginTop:10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
      },
      text_succes: {
        color:"#effaf6",
        textAlign:"center"
      }
  });