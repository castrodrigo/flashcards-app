import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import NewDeckScreen from "../screens/NewDeckScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
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
  NewDeck: NewDeckScreen
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
