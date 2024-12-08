// Initialize Cesium Viewer
const viewer = new Cesium.Viewer('cesiumContainer', {
  terrainProvider: Cesium.createWorldTerrain(),
  imageryProvider: false, // Disable default imagery
  baseLayerPicker: false, // Clean up UI
});

// Add retro Earth texture
viewer.scene.globe.imageryLayers.addImageryProvider(
  new Cesium.SingleTileImageryProvider({
    url: './assets/retro_earth_texture.jpg', // Path to retro Earth texture
    rectangle: Cesium.Rectangle.fromDegrees(-180, -90, 180, 90),
  })
);

// Add grid overlay for a retro look
viewer.scene.imageryLayers.addImageryProvider(
  new Cesium.GridImageryProvider({
    color: Cesium.Color.YELLOW, // Neon grid color
    backgroundColor: Cesium.Color.BLACK, // Grid background
    cellAlpha: 0.5, // Grid transparency
    lineThickness: 1.0, // Thickness of grid lines
  })
);

// Rotate the globe retro-style
viewer.clock.onTick.addEventListener(() => {
  viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, 0.001);
});





