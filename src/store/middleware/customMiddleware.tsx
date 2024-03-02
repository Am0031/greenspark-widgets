import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { setwidgets } from "../reducers/widgetsSlice";

const customMiddleware: Middleware<{}, RootState> =
  (store) => (next) => async (action: any) => {
    next(action);

    if (action.type === "INITIALIZE_APP") {
      try {
        const response = await fetch(
          "https://api.mocki.io/v2/016d11e8/product-widgets"
        );
        const data = await response.json();
        store.dispatch(setwidgets(data));
      } catch (error: any) {
        console.error("Error fetching data:", error);
      }
    }
  };

export default customMiddleware;
