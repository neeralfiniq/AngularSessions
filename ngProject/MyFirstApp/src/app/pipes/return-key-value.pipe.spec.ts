import { ReturnKeyValuePipe } from './return-key-value.pipe';

describe('ReturnKeyValuePipe', () => {
  it('create an instance', () => {
    const pipe = new ReturnKeyValuePipe();
    expect(pipe).toBeTruthy();
  });
});
