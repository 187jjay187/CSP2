// import comment numbers
import { commentNumbers } from '../dompopupcard.js';

// describe what we are testing
describe('calculate the number of comments', () => {
  // what should the first test result be
  test('result should get the number of comments', () => {
    const comments = ['nice food', 'great meal', 'thanks', 'love it'];
    const result = commentNumbers(comments);
    // restult expected should be plus one comment
    expect((result)).toBe(4);
  });

  // what should the second test result be
  test('result should get the number of comments', () => {
    const comments = ['nice food', 'great meal', 'thanks', 'love it', 'nice food'];
    const result = commentNumbers(comments);
    // restult expected should be plus one comment
    expect((result)).toBe(5);
  });

  // what should the third test result be
  test('result should get the number of comments', () => {
    const comments = ['nice food', 'great meal', 'thanks', 'love it', 'nice food', 'very sweet'];
    const result = commentNumbers(comments);
    // restult expected should be plus one comment
    expect((result)).toBe(6);
  });
});