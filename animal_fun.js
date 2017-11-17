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


//Read an input letter from the console and write to a file only animals that match:
// const letter = process.argv[2];
// let newList = [];
//
// if (letter) {
//   fs.readFile('./animals.txt', 'utf-8', (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       data = data.split('\n');
//       data.forEach( word => {
//         if (word.slice(0,1) === letter.toUpperCase()) {
//           newList.push(word);
//         }
//       });
//
//       fs.writeFile(`${letter}_animals.txt`, newList.join("\n"), (error) => {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log("file successfully written!");
//         }
//       });
//     }
//   });
// } else {
//   console.log("You need to enter a letter after 'node animal_fun.js '");
// }

const querystring = require('querystring');
const cache = {};
fs.readFile('./animals.txt', 'utf-8', (err, data) => {
  cache['animals'] = data;
});

function filterByLetter(letter) {
  return cache['animals']
    .split('\n')
    .filter( animal => animal.slice(0,1) === letter.toUpperCase())
    .join('\n');
}


//Setting up a server that will return the animals that match the url
//query string.
//http://localhost:8000/?letter=t
const server = http.createServer((req, res) => {
  //There will be two requests, one to our url w/ query string and the
  //other to favicon.ico. We just care about the query string so we set
  //up the conditional below:
  const query = req.url.split('?')[1];
  if (query !== undefined) {
    console.log('defined');
    const letter = querystring.parse(query).letter;
    if (cache[letter] === undefined) {
      cache[letter] = filterByLetter(letter);
    }
    res.write(cache[letter]);
    res.end();
  } else {
    console.log('undefined');
    res.write(cache['animals']);
    res.end();
  }
});

//provides a port for our server:
server.listen(8000, () => console.log("I'm listening on port 8000!"));
