// src/shapes/ChartComponent.tsx
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import { ChartShape } from "./ChartShape";

interface ChartComponentProps {
  shape: ChartShape;
}

export function ChartComponent({ shape }: ChartComponentProps) {
  const { chartType, data } = shape.props;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {chartType === "bar" ? (
        <ResponsiveBar data={data} /* Add your bar chart props */ />
      ) : (
        <ResponsivePie data={data} /* Add your pie chart props */ />
      )}
    </div>
  );
}
