import React from 'react';
import { Icon } from 'native-base';

export default (name) => {
    return ({ focused, horizontal, tintColor}) =>
    <Icon name={name} active type="SimpleLineIcons" style={{ fontSize: 20, color: tintColor }}  />;            
}
