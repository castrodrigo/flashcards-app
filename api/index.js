import { AsyncStorage } from "react-native";

const DECK_STORAGE_KEY = "flashcards-app::deck";

export function fetchCalendarResults() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(formatCalendarResults);
}

export function addDeck({ deck, key }) {
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [key]: deck
    })
  );
}
