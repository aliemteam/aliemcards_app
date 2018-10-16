import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

export default (name) => {
    return ({ focused, horizontal, tintColor}) =>
    <SimpleLineIcons name={name} active color={tintColor} size={20}  />;            
}
