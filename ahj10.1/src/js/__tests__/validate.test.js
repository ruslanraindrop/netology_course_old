/* eslint no-unused-expressions:0 */ // --> OFF

import validate from '../validate';

test('with []', () => {
  expect(validate('[55.839948799999995, 37.2342784]')).toBeTruthy;
});

test('without []', () => {
  expect(validate('55.839948799999995, 37.2342784')).toBeTruthy;
});

test('without space', () => {
  expect(validate('55.839948799999995,37.2342784')).toBeTruthy;
});

test('random number', () => {
  expect(validate('Hi')).toBeFalsy;
});
