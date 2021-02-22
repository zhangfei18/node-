const fs = require("fs");
const stacks = [];
const wordCounts = {};
const filesDir = __dirname;
let completeTasks = 0;

function checkIfComplete() {
  completeTasks++;
  if (completeTasks === stacks.length) {
     
    for (let count in wordCounts) {
      console.log(`${count}:${wordCounts[count]}`);
    }
  }
}

function addWordCounts(word) {
   
  wordCounts[word] ? wordCounts[word]++ : wordCounts[word] =1;
}

function countWords(text) {
  const words = text.toString().split(/\W+/).sort();

  words
    .filter(word => word)
    .forEach((word) => {
      addWordCounts(word);
    });
}

fs.readdir(filesDir, (err, files) => {
    
  if (err) throw err;
  files.forEach((file) => {
    const stack = (function (file) {
      return () => {
        fs.readFile(file, (err, data) => {
          if (err) throw err;
          countWords(data);
          checkIfComplete();
        });
      };
    })(file);
    stacks.push(stack);
  });
  stacks.forEach((stack) => stack());
});
