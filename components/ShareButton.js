import React from 'react';
import { Platform, ActionSheetIOS, Clipboard, ToastAndroid, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import { analyzeThis } from '../components/utils';  

const share = (card) => {
    analyzeThis(`ShareButton:${card.slug}`);
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showShareActionSheetWithOptions(
        {
          url: `https://www.aliemcards.com/cards/${card.slug}`,
          message: `Check out this ALiEM Cards on ${card.title}`
        },
        () => alert('An error occurred trying to share'),
        () => console.log('share success')
      );
    } else {
      Clipboard.setString(`https://www.aliemcards.com/cards/${card.slug}`);
      ToastAndroid.showWithGravity('Card web address copied to clipboard', ToastAndroid.LONG, ToastAndroid.TOP);
    }
  }
  
  const ShareButton = (props) =>
    <TouchableOpacity onPress={() => share(props.card)}>
      <Icon name="share" size={20} style={{ color: 'white', marginRight: 10}} />
    </TouchableOpacity>

export default ShareButton;
