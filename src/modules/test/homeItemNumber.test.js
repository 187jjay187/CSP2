// import item counter
import itemCounter from '../itemsCounter.js';
// describe what we are testing
describe('calculate the list item of homepage', () => {
  // what should the first test result be
  test('result should get the number of item', () => {
    const list = [{ Jay: 'pizza' }, { soke: 'beef' }, { Jorge: 'pasta' }, { kevin: 'roast chicken' }];
    const result = itemCounter(list);

    // restult expected should be
    expect((result)).toBe(4);
  });
  // what should the second test result be
  test('result should get the number of item', () => {
    const list = ['1partner', '2partner', '3partner'];
    const result = itemCounter(list);
    // restult expected should be
    expect((result)).toBe(3);
  });
  // what should the third test result be
  test('result should get the number of item', () => {
    const list = '1partner';
    const result = itemCounter(list);
    // restult expected should be
    expect((result)).toBe(1);
  });
  // what should the forth test result be
  test('result should get the number of item', () => {
    const list = [];
    const result = itemCounter(list);
    // restult expected should be
    expect((result)).toBe(0);
  });
});