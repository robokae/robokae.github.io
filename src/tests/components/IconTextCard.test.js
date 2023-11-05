import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { render, screen } from "@testing-library/react";
import { toHaveClass } from "@testing-library/jest-dom";
import IconTextCard from "../../components/card/iconTextCard/IconTextCard";

describe("IconTextCard", () => {
  let icons, text;

  beforeEach(() => {
    icons = [];
    icons.push(<FontAwesomeIcon icon={faHeart} />);
    text = "sample text";
  });

  it("returns a card element with an icon and text", () => {
    render(<IconTextCard icons={icons} text={text} />);

    const renderedIcon = screen.getByRole("img", { hidden: true });
    const renderedText = screen.queryByText("sample text");

    expect(renderedIcon).toHaveClass("fa-heart");
    expect(renderedText).toHaveTextContent("sample text");
  });
});
