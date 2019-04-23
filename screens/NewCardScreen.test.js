import React from "react";
import { shallow } from "enzyme";
import NewCardScreen from "./NewCardScreen";

const props = {
  deck: { id: "321", name: "Deck Test" },
  onSubmit: jest.fn(),
  navigation: { navigate: jest.fn() }
};

describe("Render NewCardScreen", () => {
  it("should render successfully", () => {
    const wrapper = shallow(<NewCardScreen {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
