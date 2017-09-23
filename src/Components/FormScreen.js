import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Switch,
  DatePickerIOS
} from 'react-native';
import axios from 'axios';

export default class FormScreen extends Component {
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
      <View style={styles.wrapper}>
        <DatePickerIOS 
        date={this.state.report.date}
        onDateChange={this.handleDateChange.bind(this)}
        />
        <Text>
          I experienced this harrassment
          <Switch 
          value={this.state.report.experienced}
          onValueChange={this.handleValueChange.bind(this)}
          />
        </Text>
        <Button
          onPress={this.handleButtonSubmit.bind(this)}
          title='Submit'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  entryField: {
    height: 20, 
    width: 200
  },
  wrapper: {
    margin: 20
  }
})

AppRegistry.registerComponent('FormScreen', () => FormScreen);
