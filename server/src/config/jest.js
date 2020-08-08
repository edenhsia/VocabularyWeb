/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jest/no-jest-import */
/* eslint-disable @typescript-eslint/no-var-requires */
const jest = require('jest');
/* eslint-enable @typescript-eslint/no-var-requires */
/* eslint-enable jest/no-jest-import */
/* eslint-enable import/no-extraneous-dependencies */

const argv = process.argv.slice(2);

// Watch unless on CI or explicitly running all tests
if (!process.env.CI) {
  argv.push('--watch');
}

// eslint-disable-next-line no-console
jest.run(argv).catch((error) => console.log(error));
