import {
  DefaultStylePanel,
  DefaultStylePanelContent,
  useEditor,
  useRelevantStyles,
} from "tldraw";
import { chartTypeStyle } from "./shapes/ChartShape";

function CustomChartStylePanel() {
  const editor = useEditor();
  const styles = useRelevantStyles();
  if (!styles) return null;

  const chartType = styles.get(chartTypeStyle);

  return (
    <DefaultStylePanel>
      <DefaultStylePanelContent styles={styles} />
      {chartType !== undefined && (
        <div>
          <label>Chart Type:</label>
          <select
            style={{ width: "100%", padding: 4 }}
            value={chartType.type === "mixed" ? "" : chartType.value}
            onChange={(e) => {
              editor.markHistoryStoppingPoint();
              const value = chartTypeStyle.validate(e.currentTarget.value);
              editor.setStyleForSelectedShapes(chartTypeStyle, value);
            }}
          >
            {chartType.type === "mixed" ? (
              <option value="">Mixed</option>
            ) : null}
            <option value="bar">Bar</option>
            <option value="line">Line</option>
            <option value="pie">Pie</option>
          </select>
        </div>
      )}
    </DefaultStylePanel>
  );
}

export default CustomChartStylePanel;
