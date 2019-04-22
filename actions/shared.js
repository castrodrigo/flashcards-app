import * as api from "../api";
import { getCards } from "./cards";
import { getDecks } from "./decks";

export const handleInitialData = () => dispatch =>
  Promise.all([api.getCards(), api.getDecks()]).then(([cards, decks]) => {
    dispatch(getDecks(JSON.parse(decks)));
    dispatch(getCards(JSON.parse(cards)));
  });
