const fs = require('fs');

fs.writeFileSync('aobut.txt', 'Hello there I am learning file system. '); // create new file.
fs.appendFileSync('aobut.txt', 'Everybody should learn javascript.'); // Add new text the file.

fs.readFile('aobut.txt', (err, data) => {
    console.log(data.toString());
});
// console.log(read_file.toString());
console.log("Loading...");