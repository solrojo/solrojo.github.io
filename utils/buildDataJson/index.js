const fs = require('fs');
const minimist = require('minimist');

const argv = minimist(process.argv);

const buildObj = (arr) => ({
  phrase: arr[0].trim(),
  ru: arr[1].trim()
});

const phrases = fs.readFileSync(argv.f, 'utf8')
  .split('\n')
  .filter(item => Boolean(item))
  .map(item => {
    const found = item.match(/\[.+\]/g);
    return found
      ? (
        found[0]
          .replace(/\[|\]/g, '')
          .split(' ')
          .map(el => buildObj(
            item.replace(found, el).split(':')
          ))
      )
      : buildObj(item.split(':'));
  })
  .flat();

if (!(phrases[0].hasOwnProperty('phrase') && phrases[0].hasOwnProperty('ru'))) {
  throw new Error('Incorrect phrases object type');
}

fs.writeFileSync(argv.o, JSON.stringify(phrases));

console.log('\x1b[42m', 'Done ');
