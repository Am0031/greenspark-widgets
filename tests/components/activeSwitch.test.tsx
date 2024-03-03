import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ActivateBadge } from "../../src/components/ActivateBadge";

describe("WidgetCard Active switch component tests", () => {
  it("Renders the active badge line correctly", async () => {
    const mockActive = true;
    const { findByTestId } = render(
      <ActivateBadge
        active={mockActive}
        handleActiveClick={() => console.log(mockActive)}
      />
    );

    const switchBtn = await findByTestId("active-switch");
    expect(switchBtn.classList.contains("Mui-checked")).toBe(true);
  });
  it("Renders the switch status correctly after click", async () => {
    let mockActive = true;
    const onSelectMock = (value: boolean) => {
      mockActive = value;
    };
    const { rerender, findByTestId } = render(
      <ActivateBadge
        active={mockActive}
        handleActiveClick={() => onSelectMock(!mockActive)}
      />
    );

    const switchBtn = await findByTestId("active-switch");
    fireEvent.click(switchBtn);

    rerender(
      <ActivateBadge
        active={mockActive}
        handleActiveClick={() => onSelectMock(!mockActive)}
      />
    );
    const updatedSwitchBtn = await findByTestId("active-switch");
    expect(updatedSwitchBtn.classList.contains("Mui-checked")).toBe(false);
  });
});
