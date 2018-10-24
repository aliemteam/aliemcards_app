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

export const regex = {
    aliemimages: /https:\/\/aliemcards\.netlify\.com(\/media\/[\w-]+\.(?:png|jpg|jpeg|gif))/g,
    internallinks: /\/cards\/[a-zA-Z0-9_-]+/g,
}
