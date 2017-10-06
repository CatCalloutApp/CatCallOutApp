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

export default class ThanksScreen extends Component {
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

  render() {
    return (
      <View style={styles.fullScreenWrapper}>
          <Text style={styles.textHeading}>
            Way to call it out!
          </Text>
          <Text style={styles.textHeading2}>
            Thanks for doing your part to keep our streets safe.
          </Text>
          <View style={styles.button}>
            <TouchableOpacity>
                <Text style = {styles.buttonText} >
                  Return to map  
                </Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fullScreenWrapper: {
    alignItems: 'center',
    justifyContent: 'center',    
    width: '100%',
    height: '100%',
    backgroundColor: '#edeaea'
  },
  textHeading: {
    color: '#ff6600',
    fontSize: 28,
    justifyContent: 'center',
    fontWeight: 'bold',
    height: '10%',
    width: '85%',
    textAlign: 'center',
  },
  textHeading2: {
    color: '#ff6600',
    fontSize: 28,
    justifyContent: 'center',
    fontWeight: 'bold',
    height: '15%',
    width: '85%',
    textAlign: 'center',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#edeaea',
    borderColor: '#ff6600',
    borderWidth: 1,
    borderRadius: 10,
    width: '75%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.75,
    shadowRadius: 1,
    shadowColor: 'gray',
    shadowOffset: { height: 0, width: 0},
    marginTop: 20,
    marginBottom: 20
  },
  buttonText: {
    color: '#ff6600',
    fontSize: 24,
  },
})

AppRegistry.registerComponent('ThanksScreen', () => ThanksScreen);


      