import { TLBaseShape, T, vecModelValidator, RecordProps, StyleProp } from "tldraw";

export const chartTypeStyle = StyleProp.defineEnum("customChart:chartType", {
  defaultValue: "bar",
  values: ["bar", "line", "pie"],
});

export type ChartTypeStyle = T.TypeOf<typeof chartTypeStyle>;


// Define the properties type for ChartShape
export type ChartShapeProps = {
  w: number;
  h: number;
  chartType: ChartTypeStyle;
  data: Array<{
    country: string;
    hotdog: number;
    burger: number;
    sandwich: number;
    kebab: number;
    fries: number;
    donut: number;
  }>;
  position: { x: number; y: number };
};

// Define the ChartShape type by extending TLBaseShape
export type ChartShape = TLBaseShape<"customChart", ChartShapeProps>;

// Define validation properties for ChartShape
export const chartShapePropsValidation: RecordProps<ChartShape> = {
  w: T.number,
  h: T.number,
  chartType: chartTypeStyle,
  data: T.arrayOf(
    T.object({
      country: T.string,
      hotdog: T.number,
      burger: T.number,
      sandwich: T.number,
      kebab: T.number,
      fries: T.number,
      donut: T.number,
    })
  ),
  position: vecModelValidator,
};
