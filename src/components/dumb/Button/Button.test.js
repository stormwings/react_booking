import React from "react";
import { mount } from "enzyme";
import Button from "./Button";

describe("<Button />", () => {
  const functionProp = jest.fn();
  const contentProp = "Button Test";
  const classNameProp = "test-button";

  const button = mount(
    <Button
      content={contentProp}
      className={classNameProp}
      onClick={functionProp}
    />
  );

  test("Render button component", () => {
    expect(button.length).toEqual(1);
  });

  test("Check text inside button", () => {
    const buttonText = button.text();

    expect(buttonText).toEqual("Button Test");
    expect(buttonText).toMatch(/Test/);
    expect(buttonText).not.toMatch(/Testing/);
    expect(buttonText).toHaveLength(11);
    expect(buttonText).not.toHaveLength(10);
  });

  test("Check click on button", () => {
    button.props().onClick();
    button.props().onClick();
    button.props().onClick();
    expect(functionProp).not.toHaveBeenCalledTimes(1);
    expect(functionProp).toHaveBeenCalledTimes(3);
  });
});
