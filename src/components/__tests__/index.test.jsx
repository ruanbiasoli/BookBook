import React from "react";
import {
  StyledNavButton,
  NavButton,
  LogoutButton,
} from "../styled/search-page";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Snapshot", () => {
  it("Button from navigation bar - Must be button", () => {
    const StyledNavButtonAction = renderer
      .create(<StyledNavButton onClick={() => {}}>Test</StyledNavButton>)
      .toJSON();
    expect(StyledNavButtonAction).toMatchSnapshot();
  });

  it("Button from navigation bar to change pages - Must be button", () => {
    const NavButtonAction = renderer
      .create(<NavButton onClick={() => {}}>Test</NavButton>)
      .toJSON();
    expect(NavButtonAction).toMatchSnapshot();
  });

  it("Logout button - Must be button", () => {
    const LogoutButtonAction = renderer
      .create(<LogoutButton onClick={() => {}}>Test</LogoutButton>)
      .toJSON();
    expect(LogoutButtonAction).toMatchSnapshot();
  });
});

describe("events", () => {
  it("simulate onclick", () => {
    const onClickSpy = jest.fn();
    const wrapper = shallow(
      <StyledNavButton onClick={onClickSpy}>Test</StyledNavButton>
    );
    wrapper.simulate("click");
    expect(onClickSpy).toHaveBeenCalled();
  });

  it("simulate onclick nav button", () => {
    const onClickSpy = jest.fn();
    const wrapper = shallow(<NavButton onClick={onClickSpy}>Test</NavButton>);
    wrapper.simulate("click");
    expect(onClickSpy).toHaveBeenCalled();
  });

  it("simulate onclick logout button", () => {
    const onClickSpy = jest.fn();
    const wrapper = shallow(
      <LogoutButton onClick={onClickSpy}>Test</LogoutButton>
    );
    wrapper.simulate("click");
    expect(onClickSpy).toHaveBeenCalled();
  });
});
