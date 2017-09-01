import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
  return (
  <Card>
    <CardSection>
    <View style={styles.firstCardSectionHeader}>
      <Image
       style={styles.thumbnailStyle}
       source={{ uri: props.album.thumbnail_image }}
      />
    </View>
    <View style={styles.firstCardSection}>
      <Text style={styles.titleStyle}>{props.album.title}</Text>
      <Text>{props.album.artist}</Text>
    </View>
    </CardSection>

    <CardSection>
      <Image
      style={styles.imageStyle}
      source={{ uri: props.album.image }}
      />
    </CardSection>
    <CardSection>
      <Button buttonText={'Buy Now!'} onPress={() => Linking.openURL(props.album.url)} />
    </CardSection>
  </Card>
  );
};

const styles = {
  firstCardSection: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  firstCardSectionHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15
  },
  titleStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
