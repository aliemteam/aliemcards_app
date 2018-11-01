import React from 'react';
import {Image, Text, View, ScrollView, StyleSheet} from 'react-native';

import { analyzeThis } from '../components/utils';
import Colors from '../components/colors';
import * as config from '../app.json';

class About extends React.Component {
  
  componentDidMount() {
    analyzeThis('AboutScreen');
  }

  render() {


    return (
      <View style={{ flex: 1}}>
      <ScrollView contentContainerStyle={{ backgroundColor: 'white', padding: 10 }}>
        <Image 
          source={require('../assets/logoHeader.png')}
          style={{ width: null, height: 125, resizeMode: 'contain' }}
        />
        <Text style={styles.version}>Version {config.expo.version}</Text>
        <Text style={styles.header}>About</Text>
        <Text style={styles.p}>Originally named, Paucis Verbis (PV) cards, these cards were developed as a bedside teaching tool used by
      Academic Life in Emergency Medicine (ALiEM) Founder and Editor-in-chief Michelle Lin. They
      were short, succinct, rapid-fire summaries of key learning points on various Emergency
      Medicine (EM) topics that would fit on a 5 x 7 index card. Michelle carried these cards in her
      pocket and handed them out to trainees as needed. Eventually others at her institution began
      using the cards and as digital and mobile technology became more ubiquitous, Michelle
      transitioned the cards to several mobile platforms so that she could share them with the
      greater EM community.</Text>
        <Text style={styles.p}> What began as a handful of personal notes, are now a key
      FOAMed point-of-care resource.</Text>
        <Text style={styles.p}>This app is the next iteration of that project.</Text>
      </ScrollView>
      </View>
    );
  }
}

export default About;

const styles = StyleSheet.create({
  header: {
    fontFamily: 'open-sans-bold',
    fontSize: 30,
    paddingBottom: 10
  },
  p: {
    fontFamily: 'open-sans-regular',
    fontSize: 16,
    paddingBottom: 10,
    
  },
  version: {
    fontFamily: 'open-sans-semi',
    fontSize: 12,
    color: Colors.primary,
    backgroundColor: Colors.tertiary,
    padding: 10,
    textAlign: 'center',
    marginBottom: 10
  }
})