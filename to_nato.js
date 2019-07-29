// Translate a string to Pilot's alphabet (NATO phonetic alphabet)
// ** Input: ** If you can read
// ** Output: ** India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

const nato_alphabet = new Array(
  "Alfa",
  "Bravo",
  "Charlie",
  "Delta",
  "Echo",
  "Foxtrot",
  "Golf",
  "Hotel",
  "India",
  "Juliett",
  "Kilo",
  "Lima",
  "Mike",
  "November",
  "Oscar",
  "Papa",
  "Quebec",
  "Romeo",
  "Sierra",
  "Tango",
  "Uniform",
  "Victor",
  "Whiskey",
  "Xray",
  "Yankee",
  "Zulu"
);

function to_nato(words) {
  return words
    .split("")
    .filter(v => v !== " ")
    .map(word => {
      if (word.match(/\W/g)) return word;
      return nato_alphabet.find(val => {
        return val.charAt(0) === word[0].toUpperCase();
      });
    })
    .join(" ");
}

console.log(to_nato("go for it!"));
