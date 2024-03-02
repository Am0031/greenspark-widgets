import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Widget {
  id: number;
  type: string;
  amount: number;
  action: string;
  linked: boolean;
  selectedColor: string;
  active: boolean;
}

export interface WidgetsState {
  widgets: Widget[];
}

const initialState: WidgetsState = {
  widgets: [],
};

const widgetsSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {
    setwidgets: (state, action: PayloadAction<Widget[]>) => {
      state.widgets = action.payload;
    },
    updateWidgets: (state, action: PayloadAction<Widget>) => {
      const updatedWidget = action.payload;
      const index = state.widgets.findIndex(
        (widget) => widget.id === updatedWidget.id
      );
      if (index !== -1) {
        state.widgets[index] = updatedWidget;
      }
    },
    updateActiveWidget: (state, action: PayloadAction<Widget>) => {
      const updatedWidget = action.payload;
      state.widgets.forEach((widget) => {
        if (widget.id === updatedWidget.id) {
          widget.active = updatedWidget.active;
        } else if (updatedWidget.active) {
          widget.active = false;
        }
      });
    },
  },
});

export const { setwidgets, updateWidgets, updateActiveWidget } =
  widgetsSlice.actions;

export default widgetsSlice.reducer;
