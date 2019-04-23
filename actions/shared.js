import * as api from "../api/data";
import { getCards } from "./cards";
import { getDecks } from "./decks";

export const handleInitialData = () => dispatch =>
  Promise.all([api.getCards(), api.getDecks()]).then(([cards, decks]) => {
    dispatch(getDecks(decks));
    dispatch(getCards(cards));
  });
