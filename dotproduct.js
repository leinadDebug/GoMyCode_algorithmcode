            /*problem2*/
// algorithm for dotproduct of two vectors//
function dotProduct(v1, v2) {
    let product = 0;
    for (let i = 0; i < v1.length; i++) {
      product += v1[i] * v2[i];
    }
    return product;
  }
  
//   check if vectors are orthogonal
  function areVectorsOrthogonal(vectors) {
    for (let i = 0; i < vectors.length; i++) {
      for (let j = i + 1; j < vectors.length; j++) {
        let dotProd = dotProduct(vectors[i], vectors[j]);
        if (dotProd !== 0) {
          return false;
        }
      }
    }
    return true;
  }
  
  // Example usage:
  let vectors = [[1, 2, 3], [4, 5, 6], [0, 2, -1]];
  console.log(areVectorsOrthogonal(vectors)); // Output: true
  