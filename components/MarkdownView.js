import React from 'react';
import { WebView } from 'react-native';

import marked from 'marked';

export default (props) => (
    <WebView useWebKit={true} source={{html: marked(props.content) }} />
);