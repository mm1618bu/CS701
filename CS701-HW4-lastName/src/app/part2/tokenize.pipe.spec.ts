import { TokenizePipe } from './tokenize.pipe';

describe('TokenizerPipe', () => {
  const pipe = new TokenizePipe();

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return an empty string when given an empty string', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should tokenize a string with default delimiter', () => {
    expect(pipe.transform('abc')).toBe('a, b, c');
  });

  it('should tokenize a string with a custom delimiter', () => {
    expect(pipe.transform('a-b-c', '-')).toBe('a, b, c');
  });
});
