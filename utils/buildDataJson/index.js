const fs = require('fs');
const minimist = require('minimist');

const argv = minimist(process.argv);
let phrases = [];

try {
  console.log('Reading a source file...')

  const data = fs.readFileSync(argv.f, 'utf8');
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
  fs.writeFileSync(argv.o, JSON.stringify(phrases));
} catch (err) {
  console.error(err);
}

console.log('Success! Exit.');
