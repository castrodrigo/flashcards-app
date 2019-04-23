import React from "react";
import { shallow } from "enzyme";
import NewDeckScreen from "./NewDeckScreen";

const props = {
  onSubmit: jest.fn()
};

describe("Render NewDeckScreen", () => {
  it("should render successfully", () => {
    const wrapper = shallow(<NewDeckScreen {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
