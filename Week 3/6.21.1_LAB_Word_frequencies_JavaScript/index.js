function calcWordFrequencies(words) {
    // TODO: Add your solution here
   const wordArray = words.split(" ");
   const frequencies = new Map();
   for (const word of wordArray) {
      if (frequencies.has(word)) {
         // If the word is already in the map, increment its count
         frequencies.set(word, frequencies.get(word) + 1);
      } else {
         // If it's a new word, add it to the map with a count of 1
         frequencies.set(word, 1);
      }
   }
   frequencies.forEach((value, key) => {
      console.log(`${key} ${value}`);
   });
}

console.log("Testing calcWordFrequencies()...");
calcWordFrequencies("hey hi Mark hi mark");



// Do NOT remove the following line:
export default calcWordFrequencies;