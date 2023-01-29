const fs = require('fs');

const argv = process.argv.slice(2);
const sourceCommandIndex = argv.findIndex((item) => item === '-f');
const outputCommandIndex = argv.findIndex((item) => item === '-o');
const sourceFilePath = argv[sourceCommandIndex + 1];
const outputFilePath = argv[outputCommandIndex + 1];
let phrases = [];

try {
  console.log('Reading a source file...')

  const data = fs.readFileSync(sourceFilePath, 'utf8');
  const lines = data.split('\n');

  phrases = lines.filter(item => Boolean(item)).map((item) => {
    const arr = item.split(':');
    return {
      phrase: arr[0].trim(),
      ru: arr[1].trim()
    };
  });
} catch (err) {
  console.error(err);
}

console.log('Source file successfully read.')

try {
  console.log('Writing to output file...')
  fs.writeFileSync(outputFilePath, JSON.stringify(phrases));
} catch (err) {
  console.error(err);
}

console.log('Success! Exit.');
