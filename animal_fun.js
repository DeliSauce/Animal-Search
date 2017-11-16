const fs = require('fs');
const http = require('http');

const letter = process.argv[2];
// console.log(letter);

let grab = [];
//
//
//
// const server = http.createServer((req, res) => {
//     res.write('hello world');
//     res.end();
// });
//
// server.listen(8000, () => console.log("I'm listening on port 8000!"));


//Read a file and output to the console.
fs.readFile('./animals.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});


// fs.readFile('./animals.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     data = data.split('\n');
//     data.forEach(word => {
//       if (word.slice(0,1) === letter.toUpperCase()) {
//         grab.push(word);
//         // console.log(word);
//       }
//     });
//
//     fs.writeFile(`${letter}_animals.txt`, grab.join("\n"), err => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("file successfully written!");
//       }
//     });
//
//
//   }
// });
