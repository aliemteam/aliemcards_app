import * as cardsjson from '../data/cards.json';
import * as summariesjson from '../data/cardsummaries.json';
import * as recent from '../data/recent.json';
import * as categoriesjson from '../data/categories.json';

const cards = cardsjson.cards;
const summaries = summariesjson.card_summaries;
const categories = categoriesjson.categories;

export function getSummary(slug) {
    return summaries.filter(card => card.slug == slug)[0];
}

export function getSummaries() {
    return summaries;
}

export function getCards() {
    return cards;
}

export function getCard(slug) {
    return cards.filter(card => card.slug == slug)[0];
}

export function getRecent() {
    return recent;
}

export function getCategories() {
    return categories;
}
 