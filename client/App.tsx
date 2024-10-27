import { useSync } from '@tldraw/sync'
import { Tldraw, defaultShapeUtils } from "tldraw";
import { getBookmarkPreview } from './getBookmarkPreview'
import { multiplayerAssetStore } from './multiplayerAssetStore'
import { ChartShapeUtils } from './components/shapes/ChartShapeUtils'
import { ChartTool } from './components/tools/ChartTool'
import {
  uiOverrides,
  customAssetUrls,
  components,
} from "./components/ui-overrides";
import { useMemo } from 'react';

// Where is our worker located? Configure this in `vite.config.ts`
const WORKER_URL = process.env.TLDRAW_WORKER_URL

// In this example, the room ID is hard-coded. You can set this however you like though.
const roomId = 'test-room'

const customShape = [ChartShapeUtils];
const tools = [ChartTool];


function App() {
	// Create a store connected to multiplayer.
	const store = useSync({
    // We need to know the websockets URI...
    uri: `${WORKER_URL}/connect/${roomId}`,
    // ...and how to handle static assets like images & videos
    assets: multiplayerAssetStore,
    shapeUtils: useMemo(() => [...customShape, ...defaultShapeUtils], []),
  });
	
	return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw
        // we can pass the connected store into the Tldraw component which will handle
        // loading states & enable multiplayer UX like cursors & a presence menu
        store={store}
        shapeUtils={customShape}
        tools={tools}
        overrides={uiOverrides}
        assetUrls={customAssetUrls}
        components={components}
        onMount={(editor) => {
          // when the editor is ready, we need to register our bookmark unfurling service
					editor.registerExternalAssetHandler("url", getBookmarkPreview);
          editor.createShape({ type: "customChart", x: 100, y: 100 });
        }}
      />
    </div>
  );
}

export default App
