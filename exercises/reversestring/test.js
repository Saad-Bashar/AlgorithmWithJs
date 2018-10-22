const reverse = require('./index');
const reverse1 = require('./index');
const reverse2 = require('./index');
const reverse3 = require('./index');
/**
 * Functions if exists
 */
test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse1 function exists', () => {
  expect(reverse1).toBeDefined();
});

test('Reverse2 function exists', () => {
  expect(reverse2).toBeDefined();
});

test('Reverse3 function exists', () => {
  expect(reverse3).toBeDefined();
});
/**----------------------------------------*/

/** Solution 1 testing */
test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

test('Reverse reverses a string', () => {
  expect(reverse('  saad')).toEqual('daas  ');
});

/** Solution 2 test */
test('Reverse1 reverses a string', () => {
  expect(reverse1('abcd')).toEqual('dcba');
});

test('Reverse1 reverses a string', () => {
  expect(reverse1('  abcd')).toEqual('dcba  ');
});

test('Reverse1 reverses a string', () => {
  expect(reverse1('  saad')).toEqual('daas  ');
});

/** Solution 3 test */
test('Reverse2 reverses a string', () => {
  expect(reverse2('abcd')).toEqual('dcba');
});

test('Reverse2 reverses a string', () => {
  expect(reverse2('  abcd')).toEqual('dcba  ');
});

test('Reverse2 reverses a string', () => {
  expect(reverse2('  saad')).toEqual('daas  ');
});

/** Solution 4 test */
test('Reverse3 reverses a string', () => {
  expect(reverse3('abcd')).toEqual('dcba');
});

test('Reverse3 reverses a string', () => {
  expect(reverse3('  abcd')).toEqual('dcba  ');
});

test('Reverse3 reverses a string', () => {
  expect(reverse3('  saad')).toEqual('daas  ');
});
