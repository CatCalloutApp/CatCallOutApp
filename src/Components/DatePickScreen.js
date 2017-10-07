import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  Switch,
  DatePickerIOS
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export default class DatePickScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      role: this.props.role,
      date: new Date
    }
  };

goToThanks() {
    Actions.thanks({
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      role: this.state.role,
      date: this.state.date
      })
  };

  handleDateChange(date) {
    this.setState({
      date: date
    })
  };
  
  render() {
    return (
      <View style={styles.fullScreenWrapper}>
          <Text style={styles.textHeading}>
          It happened on
          </Text>
        <View style={styles.pickerWrapper}>
          <DatePickerIOS 
          date={this.state.date}
          onDateChange={this.handleDateChange.bind(this)}
          />
        </View>
          <View style={styles.button}>
            <TouchableOpacity
            onPress={this.goToThanks.bind(this)}
              >
                <Text style = {styles.buttonText} >
                  Next 
                </Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  entryField: {
    height: 20, 
    width: 200
  },
  fullScreenWrapper: {
    alignItems: 'center',
    justifyContent: 'center',    
    width: '100%',
    height: '100%',
    backgroundColor: '#edeaea'
  },
  pickerWrapper: {
    margin: 20,
    height: '46%',
    width: '85%'
  },
    textHeading: {
    color: '#ff6600',
    fontSize: 28,
    justifyContent: 'center',
    fontWeight: 'bold',
    height: '7%',
    width: '85%',
    textAlign: 'center'
  },
  button: {
    elevation: 1,
    position: 'absolute',
    bottom: 25,
    backgroundColor: '#edeaea',
    borderColor: '#ff6600',
    borderWidth: 1,
    borderRadius: 10,
    width: '60%',
    height: 40,
    marginBottom: 160,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.75,
    shadowRadius: 1,
    shadowColor: 'gray',
    shadowOffset: { height: 0, width: 0},
  },
  buttonText: {
    color: '#ff6600',
    fontSize: 20,
  },
})

AppRegistry.registerComponent('DatePickScreen', () => DatePickScreen);
