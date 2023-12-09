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
  Platform,
  Modal
  
} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';


  

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDatePicker: false,
      date: new Date(),
      showDropdown: false,
      selectedItem: null,
    };

    this.dropdownItems = ['Male', 'Female', 'Other'];
  }

  handleDateChange = (event, selectedDate) => {
    this.setState({ showDatePicker: Platform.OS === 'ios', date: selectedDate || this.state.date });
  };

  showDatePicker = () => {
    this.setState({ showDatePicker: true });
  };

  hideDatePicker = () => {
    this.setState({ showDatePicker: false });
  };

  genderDropdown = () => {
    this.setState((prevState) => ({
      showDropdown: !prevState.showDropdown,
    }));
  };

  selectGender = (item) => {
    this.setState({
      selectedItem: item,
      showDropdown: false,
    });
  };
  render() {
    
    
    return (
      
      <ScrollView>
      <View style={style.container}>
      
        <View><Image source={require('./assets/logo.png')} style={{marginTop:300, width:200,height:200}}></Image></View>
        <View>
          
          <View style={{ flex: 30, flexdirection: "column" }}>
            <TextInput style={style.text_box} placeholder="Username" placeholderTextColor='#effaf6' />
            <TextInput style={style.text_box} placeholder="Name" placeholderTextColor='#effaf6' />
            <TextInput style={style.text_box} placeholder="Surname" placeholderTextColor='#effaf6' />
            
            <TouchableOpacity style={style.text_box} onPress={this.showDatePicker}>
              <Text style={[style.text_style,{marginTop:7, marginLeft:3}]}>{this.state.date.toLocaleDateString()}</Text>
            </TouchableOpacity>

            {this.state.showDatePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={this.state.date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={this.handleDateChange}
                onTouchCancel={this.hideDatePicker}
              />
            )}
            
            <TouchableOpacity onPress={this.genderDropdown} style={[style.text_box, style.dropdownButton]}>
          <Text style={style.text_style}>{this.state.selectedItem || 'Gender'}</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.showDropdown}
          animationType="slide"
          transparent={true}
          onRequestClose={() => this.setState({ showDropdown: false })}
        >
          <View style={style.modalContainer}>
            {this.dropdownItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={style.dropdownItem}
                onPress={() => this.selectGender(item)}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>

            <TextInput style={style.text_box} placeholder="Email" placeholderTextColor='#effaf6' />
            <TextInput style={style.text_box} placeholder="Password" placeholderTextColor='#effaf6' secureTextEntry={true} />
            <TextInput style={style.text_box} placeholder="Confirm Password" placeholderTextColor='#effaf6' secureTextEntry={true} />
            <View style={{flexDirection:'row', alignItems: 'flex-end', marginTop:10}}>
            </View>
            <View style={{flexDirection: 'row', marginTop:30,justifyContent: 'center'}}>
            

            <TouchableOpacity
              style={style.button}>
              <Text style={style.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            </View>


            
          </View>
        </View>
        <View></View>
      </View>
      </ScrollView>
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
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#effaf6',
    marginTop:10
  },
  text_style: {
    color: '#effaf6'
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
  },
  dropdownButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#effaf6",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownButtonText: {
    fontSize: 20,
    color: '#effaf6',
  },
  modalContainer: {
    marginTop: 'auto',
    marginBottom: 0,
    backgroundColor: 'white',
    width: '100%',
  },
  dropdownItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#effaf6",
    borderRadius: 20,
    marginBottom: 10,
    fontSize: 20,
    color: '#effaf6',
  },
 
});
