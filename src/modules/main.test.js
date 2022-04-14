import itemCounter from './__mocks__/itemCounter.js';

describe('itemCounter', () => {
  test('should return the number of items', () => {
    expect(itemCounter()).toBe(12);
  });
});
