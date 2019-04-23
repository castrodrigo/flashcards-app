import React from "react";
import { shallow } from "enzyme";
import HomeScreen from "./HomeScreen";

const props = {
  decksMap: ["321"],
  decks: { "321": { id: "321", name: "Deck Test" } },
  cards: { "321": { "123": { name: "Question", answer: "Answer" } } },
  navigation: { navigate: jest.fn() }
};

describe("Render HomeScreen", () => {
  it("should render successfully", () => {
    const wrapper = shallow(<HomeScreen {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
