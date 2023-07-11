                /*problem1*/
/*----Algorithm for distinct element of two arrays*/
function sumOfDistinctElements(set1, set2) {
    let sum = 0;
  
    for (let element of set1) {
      if (!set2.includes(element)) {
        sum += element;
      }
    }console.log(sum)
  
    for (let element of set2) {
      if (!set1.includes(element)) {
        sum += element;
      }
    }
  
    return sum;
  }
  
  // Example usage:
  let set1 = [3, 1, 7, 9];
  let set2 = [2, 4, 1, 9, 3];
  console.log(sumOfDistinctElements(set1, set2)); // Output: 13
  

