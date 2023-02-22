import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";
import { shallow } from "enzyme";

describe("App", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render a div with the class App-header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-header")).toHaveLength(1);
  });

  it("should render a div with the class App-body", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-body")).toHaveLength(1);
  });

  it("should render a div with the class App-footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-footer")).toHaveLength(1);
  });
});
