// Import a Library to help create a Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a Component
const App = () => {
  return (
    <Header />
  );
};

// Render it to a device

AppRegistry.registerComponent('albums', () => App);
