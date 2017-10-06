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
import axios from 'axios';

export default class DatePickScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      report: {
        experienced: true,
        map_location: this.props.location,
        date: new Date
      }
    }
  }

  handleButtonSubmit(){
    console.log(this.state.report)
    navigator.geolocation.getCurrentPosition((position) => {console.log(position)})
  }

  handleValueChange(value) {
    console.log(value)
    let newReport = Object.assign({}, this.state.report, {experienced: value})
    this.setState({
      report: newReport
    })
  }

  handleDateChange(date) {
    let newReport = Object.assign({}, this.state.report, {date: date})
    this.setState({
      report: newReport
    })
  }
  
  render() {
    return (
      <View style={styles.fullScreenWrapper}>
          <Text style={styles.textHeading}>
          It happened on
          </Text>
        <View style={styles.pickerWrapper}>
          <DatePickerIOS 
          date={this.state.report.date}
          onDateChange={this.handleDateChange.bind(this)}
          />
        </View>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={this.handleButtonSubmit.bind(this)}>
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
