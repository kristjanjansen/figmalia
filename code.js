figma.showUI(__html__);
figma.ui.onmessage = ({ message, points }) => {
  if (message === "createCircles") {
    //console.log(points);
    const nodes = [];
    points.forEach(([x, y]) => {
      const circle = figma.createEllipse();
      circle.x = x;
      circle.y = y;
      circle.resize(50, 50);
      circle.fills = [{ type: "SOLID", color: { r: 1, g: 0, b: 0 } }];
      figma.currentPage.appendChild(circle);
      nodes.push(circle);
    });
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }
  figma.closePlugin();
};
