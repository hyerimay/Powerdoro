module.exports = (calcRelativeY, trayBounds, windowWidth, externalDisplayY) => ({
    x: Math.round(trayBounds.x + (trayBounds.width / 2) - (windowWidth / 2)),
    y: externalDisplayY + calcRelativeY(trayBounds),
 });
