import React from 'react';
import { SafeAreaView, Text,  } from 'react-native';

import CardList from './CardList';
import { getSummaries } from './CardLibrary';

const AllCards = () => 
  <SafeAreaView style={{ flex: 1 }}>
    <CardList
      cards={getSummaries()}
    />
  </SafeAreaView>

export default AllCards;
