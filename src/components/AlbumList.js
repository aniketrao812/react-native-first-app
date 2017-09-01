import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

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

renderAlbums() {
  return this.state.albums.map((album) =>
   <AlbumDetail key={album.title} album={album} />
 );
}

render() {
  return (
    <ScrollView>
      {this.renderAlbums()}
    </ScrollView>
    );
  }
}

export default AlbumList;
