import fs from 'fs';
import outspoken from '../outspoken';

export default function program(options) {

  console.log(`I'll be performing maintenance on ${options.repository}...`)

  const { developmentStatus, unitTests, compiler, server } = outspoken({
    source: fs.readFileSync('./README.md').toString(),
    options
  });

}
