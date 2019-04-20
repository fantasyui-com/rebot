import fs from 'fs';
import outspoken from '../outspoken';

export default function program(options) {

  console.log(`I'll be performing maintenance on ${options.repository}`)

  const sources = fs.readFileSync('README.md');

  let primaryPipe = '';


  let result = [];
  let match;
  let regex = /OUTSPOKEN:(.*?)END\./gs;

  while ((match=regex.exec(sources)) !== null) {
    result.push(match[1]);
  }


// console.log(result)

  const primary = outspoken(result[0]);

  // Results must be a simple array
  console.log(primary);

  // primary.developmentStatus();
  // primary.unitTests();
  // primary.compile('primary');
  // primary.run(options);

}
