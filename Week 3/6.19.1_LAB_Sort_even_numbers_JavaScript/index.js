function sortEvens(numArray) {
    // TODO: Write your solution here
   let evens = [];
   for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] % 2 === 0) {
         evens.push(numArray[i]);
      }
   }
   evens.sort(function (a, b) {
      return a - b;
   });
   return evens;
}

console.log("Testing sortEvens()...");
let nums = [4, 2, 9, 1, 8];
let evenNums = sortEvens(nums);
console.log(evenNums);


// Do NOT remove the following line:
export default sortEvens;