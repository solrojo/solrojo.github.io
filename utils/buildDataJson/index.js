const fs = require('fs');
const minimist = require('minimist');

const argv = minimist(process.argv);
let phrases = [];

try {
  console.log('Reading a source file...')

  phrases = fs.readFileSync(argv.f, 'utf8')
    .split('\n')
    .filter(item => Boolean(item))
    .map(item => {
      const found = item.match(/\[.+\]/g);
      return found
        ? found.join().replace(/\[|\]/g, '').split(' ').map(el => item.replace(found, el))
        : item
    })
    .flat()
    .map((item) => {
      const arr = item.split(':');
      return {
        phrase: arr[0].trim(),
        ru: arr[1].trim()
      };
    });

    if (!(phrases[0].hasOwnProperty('phrase') && phrases[0].hasOwnProperty('ru'))) {
      throw new Error('Incorrect phrases object type');
    }
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
