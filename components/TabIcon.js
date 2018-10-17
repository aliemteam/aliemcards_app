import React from 'react';
import { SimpleLineIcons as Icon } from '@expo/vector-icons';

export default (name) => {
    return ({ focused, horizontal, tintColor}) =>
    <Icon name={name} active color={tintColor} size={20}  />;            
}
