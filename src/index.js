
// You should implement your task here. module.exports

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }
  
  const arr = [];
  
  for (i = 0; i < matrix.length; i++) {
    if (i%2 !== 0) {
      arr.push(matrix[i].reverse());
    } else {
      arr.push(matrix[i]);
    }
  }
  const arrNew = [].concat(...arr);
 
  
  
 return arrNew;
}






