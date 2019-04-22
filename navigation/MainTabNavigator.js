import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import HomeContainer from "../screens/HomeContainer";
import DeckContainer from "../screens/DeckContainer";
import NewCardContainer from "../screens/NewCardContainer";
import NewDeckContainer from "../screens/NewDeckContainer";
import QuizContainer from "../screens/QuizContainer";

const HomeStack = createStackNavigator({
  Home: HomeContainer,
  Deck: DeckContainer,
  NewCard: NewCardContainer,
  Quiz: QuizContainer
});

HomeStack.navigationOptions = {
  tabBarLabel: "My Decks",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={"cards-outline"}
      iconFamily="community"
    />
  )
};

const NewDeckStack = createStackNavigator({
  NewDeck: NewDeckContainer
});

NewDeckStack.navigationOptions = {
  tabBarLabel: "New Deck",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"plus-circle"} iconFamily="awesome" />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  NewDeckStack
});
