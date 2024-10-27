import { ResponsiveBar } from "@nivo/bar";
import {
  BaseBoxShapeUtil,
  Polygon2d,
  Vec,
} from "tldraw";
import { ChartShape, chartShapePropsValidation } from "./ChartShape"; 

// Define the ChartShapeUtils class as a ShapeUtil
export class ChartShapeUtils extends BaseBoxShapeUtil<ChartShape> {
  static override type = "customChart" as const;
  static override props = chartShapePropsValidation;

  getDefaultProps(): ChartShape["props"] {
    return {
      w: 400,
      h: 300,
      chartType: "bar",
      data: [
        {
          country: "AD",
          hotdog: 71,
          burger: 151,
          sandwich: 48,
          kebab: 13,
          fries: 3,
          donut: 190,
        },
      ],
      position: { x: 0, y: 0 },
    };
  }

  override component(shape: ChartShape) {
    const { data, w, h } = shape.props;

    return (
      <div style={{ width: w, height: h }}>
        <ResponsiveBar
          data={data}
          keys={["hotdog", "burger", "sandwich", "kebab", "fries", "donut"]}
          indexBy="country"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "country",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "food",
            legendPosition: "middle",
            legendOffset: -40,
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [{ on: "hover", style: { itemOpacity: 1 } }],
            },
          ]}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`
          }
        />
      </div>
    );
  }

  // Implement getGeometry to define the shape's outline
  getGeometry(shape: ChartShape) {
    const { w, h } = shape.props;

    return new Polygon2d({
      points: [new Vec(0, 0), new Vec(w, 0), new Vec(w, h), new Vec(0, h)],
      isFilled: true,
    });
  }

  // Optional: Add an indicator function for selection visuals
  indicator(shape: ChartShape) {
    const { w, h } = shape.props;
    return <rect x={0} y={0} width={w} height={h} stroke="blue" fill="none" />;
  }
}
