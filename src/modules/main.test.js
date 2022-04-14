import itemCounter from './__mocks__/itemCounter.js';
import commentsCounter from './__mocks__/commentConter.js';

describe('itemCounter', () => {
  test('Items are defined', () => {
    expect(itemCounter()).toBeDefined();
  });
  test('Items are not null', () => {
    expect(itemCounter()).not.toBeNull();
  });
  test('should return the number of items', () => {
    expect(itemCounter()).toBe(12);
  });
});

describe('commentsCounter', () => {
  test('Comments counter is defined', () => {
    expect(commentsCounter()).toBeDefined();
  });
  test('Comments counter is not  null', () => {
    expect(commentsCounter()).not.toBeNull();
  });
  test('should return the number of comments', () => {
    expect(commentsCounter()).toBe(12);
  });
});