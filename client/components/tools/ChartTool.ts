// src/tools/ChartTool.tsx
import { BaseBoxShapeTool } from "tldraw";

export class ChartTool extends BaseBoxShapeTool {
  static override id = "customChart";
  static override initial = "idle";
  override shapeType = "customChart";
}
