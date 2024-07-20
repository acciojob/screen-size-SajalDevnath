function updateSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const dimensionsElement = document.getElementById('dimensions');
  dimensionsElement.textContent = `Width: ${width} and Height: ${height}`;
}

window.addEventListener('resize', updateSize);


updateSize();
