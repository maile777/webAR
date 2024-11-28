function takeScreenshot() {
  var sceneEl = document.querySelector('a-scene');
  var renderer = sceneEl.renderer;
  var canvas = renderer.domElement;
  var dataURL = canvas.toDataURL('image/png');
  var link = document.createElement('a');
  link.href = dataURL;
  link.download = 'screenshot.png';
  link.click();
}

document.querySelector('a-scene').addEventListener('click', takeScreenshot);
