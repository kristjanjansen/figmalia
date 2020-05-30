figma.showUI(__html__);
figma.ui.hide();
figma.ui.onmessage = ({ message, points }) => {
  if (message === "createCircles") {
    const nodes = [];
    points.forEach(([x, y]) => {
      const circle = figma.createEllipse();
      circle.x = x;
      circle.y = y;
      circle.resize(200, 200);
      circle.fills = [{ type: "SOLID", color: { r: 1, g: 0, b: 0 } }];
      circle.opacity = 0.25;
      figma.currentPage.appendChild(circle);
      nodes.push(circle);
    });
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }
  figma.closePlugin();
};
