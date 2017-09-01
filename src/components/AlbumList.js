import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {

state = { albums: [] }; // set initial state of component

componentWillMount() {
  /*
    update state of component once get request is complete
    and render the component once again.
  */
  fetch('https://rallycoding.herokuapp.com/api/music_albums')
  .then((response) => response.json())
  .then((responseData) => this.setState({ albums: responseData }));
}
render() {
  console.log(this.state);
  return (
    <View>
      <Text>Album List! </Text>
    </View>
    );
  }
}

export default AlbumList;
