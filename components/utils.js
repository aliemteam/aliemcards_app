import React from 'react';
import { Analytics, PageHit } from 'expo-analytics';

export const constants = {
    GA: 'UA-124875540-2'
}

export function analyzeThis(log) {
    const analytics = new Analytics(constants.GA, null, { debug: true });
    analytics.hit(new PageHit(log))
        .then(() => `logged ${log}`)
        .catch(e => console.log(e.message));
}
