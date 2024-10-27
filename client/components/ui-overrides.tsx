import {
  TLUiOverrides,
  TLUiAssetUrlOverrides,
  useIsToolSelected,
  useTools,
  TldrawUiMenuItem,
  DefaultToolbar,
  DefaultToolbarContent,
  TLComponents,
  DefaultToolbarProps, // Import the type for DefaultToolbar props
} from "tldraw";

// Add custom tool to the toolbar
export const uiOverrides: TLUiOverrides = {
  tools(editor, tools) {
    tools.customChart = {
      id: "customChart",
      icon: "chart",
      label: "Chart",
      kbd: "c",
      onSelect: () => {
        editor.setCurrentTool("customChart");
      },
    };
    return tools;
  },
};

// Provide a URL for the custom Chart icon
export const customAssetUrls: TLUiAssetUrlOverrides = {
  icons: {
    'chart': "/chart-icon.svg", // Path to the custom chart icon
  },
};

// Override the default toolbar to include our Chart tool
export const components: TLComponents = {
  Toolbar: (props: DefaultToolbarProps) => {
    const tools = useTools();
    const isChartSelected = useIsToolSelected(tools["customChart"]);
    return (
      <DefaultToolbar {...props}>
        <TldrawUiMenuItem
          {...tools["customChart"]}
          isSelected={isChartSelected}
        />
        <div>hello</div>
        <DefaultToolbarContent />
      </DefaultToolbar>
    );
  },
};
