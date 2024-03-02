import { WidgetCard } from "../components/WidgetCard";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Widgets = () => {
  const widgets = useSelector((state: RootState) => state.widgets.widgets);

  console.log("data in the widget component", widgets);

  return (
    <div>
      <h1>Widgets page</h1>
      <div
        style={{
          width: "auto",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {widgets &&
          widgets.length > 0 &&
          widgets.map((widget) => (
            <WidgetCard key={widget.id} widget={widget} />
          ))}
      </div>
    </div>
  );
};
