const argv = process.argv.slice(2);

// Watch unless on CI or explicitly running all tests
if (!process.env.CI) {
  argv.push('--watch');
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
jest.run(argv);
