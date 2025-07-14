export const saveSketchToLocal = (sketch) => {
  const all = JSON.parse(localStorage.getItem('sketches') || '[]');
  all.push(sketch);
  localStorage.setItem('sketches', JSON.stringify(all));
};
