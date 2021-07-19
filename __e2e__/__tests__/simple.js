const { fork } = require('child_process');
const { join } = require('path');

test.each([
  ['esbuild to bundle CommonJS', '../dist/main.esbuild-commonjs.js'],
  ['esbuild to bundle ES Module', '../dist/main.esbuild-esm.js'],
  ['global object', '../global.js'],
  ['Node.js to run CommonJS', '../runNode.js'],
  ['Node.js to run ES Module', '../runNode.mjs'],
  ['Webpack to bundle CommonJS', '../dist/main.webpack-commonjs.js'],
  ['Webpack to bundle ES Module', '../dist/main.webpack-esm.js']
])('Code using %s should work', async (_, filename) => {
  const childProcess = fork(join(__dirname, filename));
  const messageFn = jest.fn();

  const promise = new Promise((resolve, reject) => {
    childProcess.on('message', arg0 => messageFn(arg0));
    childProcess.once('exit', resolve);
    childProcess.once('error', reject);
  });

  await expect(promise).resolves.toBe(0);

  expect(messageFn).toHaveBeenCalledTimes(2);
  expect(messageFn).toHaveBeenCalledWith('"load" addEventListener');
  expect(messageFn).toHaveBeenCalledWith('"load" onload');
});
