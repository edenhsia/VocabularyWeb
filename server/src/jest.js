/* eslint-disable import/no-extraneous-dependencies */
import jest from 'jest';

const argv = process.argv.slice(2);

// Watch unless on CI or explicitly running all tests
if (!process.env.CI) {
  argv.push('--watch');
}

jest.run(argv);
