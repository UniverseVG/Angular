import { ReversePipe } from './reverse.pipe';

describe('Description', () => {
  it('it should reverse a string', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
});
