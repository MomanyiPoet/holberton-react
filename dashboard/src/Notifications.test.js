import Notifications from "./Notifications";
import { shallow } from "enzyme";

describe("Notifications", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render three list items", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("li")).toHaveLength(3);
  });

  it('should render the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain("Here is the list of notifications");
  });
});
