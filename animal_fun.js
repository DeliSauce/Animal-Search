const fs = require('fs');
const http = require('http');

//Read a file and output to the console.
// fs.readFile('./animals.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

//Print the global process object to console: contains a lot of info about node process
// console.log(process);

const letter = process.argv[2];
let newList = [];

if (letter) {
  fs.readFile('./animals.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      data = data.split('\n');
      data.forEach( word => {
        if (word.slice(0,1) === letter.toUpperCase()) {
          newList.push(word);
        }
      });

      fs.writeFile(`${letter}_animals.txt`, newList.join("\n"), (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("file successfully written!");
        }
      });
    }
  });
} else {
  console.log("You need to enter a letter after 'node animal_fun.js '");
}





// const server = http.createServer((req, res) => {
//     res.write('hello world');
//     res.end();
// });
//
// server.listen(8000, () => console.log("I'm listening on port 8000!"));
