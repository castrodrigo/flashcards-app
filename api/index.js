import { AsyncStorage } from "react-native";

const DECK_STORAGE_KEY = "flashcards-app:deck";
const CARD_STORAGE_KEY = "flashcards-app:card";

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY);
}

export const addDeck = ({ deck, key }) =>
  AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [key]: deck
    })
  );

export function getCards() {
  return AsyncStorage.getItem(CARD_STORAGE_KEY);
}

export const addCard = ({ card, key }) =>
  AsyncStorage.mergeItem(
    CARD_STORAGE_KEY,
    JSON.stringify({
      [key]: card
    })
  );
