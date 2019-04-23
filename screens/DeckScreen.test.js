import React from "react";
import { shallow } from "enzyme";
import DeckScreen from "./DeckScreen";

const props = {
  cardsMap: ["1", "2"],
  deck: { id: "123", name: "Deck Test" },
  navigation: { navigate: jest.fn() }
};

describe("Render DeckScreen", () => {
  it("should render successfully", () => {
    const wrapper = shallow(<DeckScreen {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should render successfully without cards", () => {
    const wrapper = shallow(<DeckScreen {...props} cardsMap={[]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
