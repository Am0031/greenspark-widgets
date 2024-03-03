import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { BadgeColour } from "../../src/components/BadgeColour";

describe("WidgetCard Badge colour component tests", () => {
  it("Renders the active colour radio items correctly", async () => {
    const mockColour = "blue";
    const { findByTestId } = render(
      <BadgeColour
        widgetColour={mockColour}
        handleColourChange={() => console.log(mockColour)}
      />
    );

    const colourItem = await findByTestId("colour-blue");
    expect(colourItem.firstChild).toBeChecked();
    const otherColourItem = await findByTestId("colour-black");
    expect(otherColourItem.firstChild).not.toBeChecked();
  });
  it("Renders the colour radio items correctly after click", async () => {
    let mockColour = "blue";
    const onSelectMock = (value: string) => {
      mockColour = value;
    };

    const { rerender, findByTestId } = render(
      <BadgeColour
        widgetColour={mockColour}
        handleColourChange={(e: any) => onSelectMock("black")}
      />
    );

    const otherColourItem = await findByTestId("colour-black");
    fireEvent.click(otherColourItem);

    rerender(
      <BadgeColour
        widgetColour={mockColour}
        handleColourChange={() => onSelectMock("black")}
      />
    );

    const updatedOtherColourItem = await findByTestId("colour-black");
    expect(updatedOtherColourItem.classList.contains("Mui-checked")).toBe(true);
  });
});
