// src/components/ChartEditor.tsx
import { ChartShape } from "./shapes/ChartShape";
import { useState } from "react";

interface ChartEditorProps {
  app: any; // Use `any` if `TldrawApp` type is unavailable
  shape: ChartShape;
  onClose: () => void;
}

export function ChartEditor({ app, shape, onClose }: ChartEditorProps) {
  const [chartType] = useState(shape.props.chartType);
  const [data] = useState(shape.props.data);

  const handleSave = () => {
    app.updateShapes([
      {
        id: shape.id,
        type: "customChart",
        props: {
          chartType,
          data,
        },
      },
    ]);
    onClose();
  };

  return (
    <div className="chart-editor">
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
