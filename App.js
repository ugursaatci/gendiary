import React, { Component,useState } from "react";


import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  Button,
  
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import Feed from "./Feed";





class App extends React.Component {
state={
  isChecked:false,
};  

  render() {
    
    return (
      
      <View style={style.container}>
      
        <View><Image source={require('./assets/logo.png')} style={{marginTop:300, width:200,height:200}}></Image></View>
        <View>
          
          <View style={{ flex: 30, flexdirection: "column" }}>
            <TextInput style={style.text_box} placeholder="Username" placeholderTextColor='#effaf6' />
            <TextInput style={style.text_box} placeholder="Password" placeholderTextColor='#effaf6' secureTextEntry={true} />
            <TouchableOpacity
              onPress={()=>this.props.navigation.navigate("ForgotPassword")} 
              style={{flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Text style={style.text_style}>Forgot Password?</Text></TouchableOpacity>
            <View style={{flexDirection:'row', alignItems: 'flex-end', marginTop:10}}>
            <TouchableOpacity onPress={() => this.setState({ isChecked: !this.state.isChecked })} style={style.checkbox}>
            <Image source={this.state.isChecked ? require("./assets/check.png") : null} style={style.checkboxImage}/>
            </TouchableOpacity>
            <Text style={[style.text_style,{fontSize:16}]}>  Remember Me!</Text>
            </View>
            
           
            
            
            <View style={{flexDirection: 'row', marginTop:30,justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={()=>this.props.navigation.navigate("Feed")}
              style={style.button}>
              <Text style={style.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={()=>this.props.navigation.navigate("Signup")}
              style={style.button}>
              <Text style={style.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            </View>


            <View style={{flexDirection:'column', marginTop:10}}>
            <TouchableOpacity
              style={style.image_style}>
              <Image source={require('./assets/google.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.image_style}>
              <Image source={require('./assets/facebook.png')}></Image>
            </TouchableOpacity>
      
            </View>
          </View>
        </View>
        <View></View>
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
  checkbox: {
    width: 16,
    height: 16,
    marginTop:10
  },
  checkboxImage: {
    width: 16,
    height: 16,
    alignSelf: "center",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#effaf6",
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
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image_style:{
    marginTop:10
  }
  
 
});



const AppNavigator= createStackNavigator({
  Login: {
    screen: App,
    navigationOptions: {
      title: "Login", 
      headerStyle: {
        backgroundColor: "#09333f", 
      },
      headerTintColor: "#effaf6", 
    },
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: "Sign Up", 
      headerStyle: {
        backgroundColor: "#09333f", 
      },
      headerTintColor: "#effaf6", 
    },
  },
  
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      title: "Forgot Password",
      headerStyle: {
        backgroundColor: "#09333f", 
      },
      headerTintColor: "#effaf6", 
    },
  },
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: "Feed",
      headerStyle: {
        backgroundColor: "#09333f",
      },
      headerTintColor: "#effaf6",
    },
  },
});

export default createAppContainer(AppNavigator);





