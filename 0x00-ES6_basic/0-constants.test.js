import { taskFirst, getLast, taskNext } from './0-constants';

describe('taskFirst', () => {
  test('returns the correct task', () => {
    expect(taskFirst()).toBe('I prefer const when I can.');
  });
});

describe('getLast', () => {
  test('returns the correct string', () => {
    expect(getLast()).toBe(' is okay');
  });
});

describe('taskNext', () => {
  test('returns the correct combination', () => {
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});
