import { AsyncStorage } from "react-native";

const DECK_STORAGE_KEY = "flashcards-app:deck";

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
