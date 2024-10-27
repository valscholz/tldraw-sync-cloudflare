import { BaseBoxShapeUtil, Polygon2d, Vec } from "tldraw";
import { ChartShape, chartShapePropsValidation } from "./ChartShape"; 
import { ChartComponent } from "./ChartComponent";

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

  override canEdit() {
    return true;
  }

  override component(shape: ChartShape) {
    const { w, h } = shape.props;

    return (
      <div style={{ width: w, height: h }}>
        <ChartComponent shape={shape} />
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
