import { handleError } from './functions';

describe('handleError', () => {
  it('should log an error to the console', () => {
    const errorMsg = 'some error';
    spyOn(console, 'error');
    const returnedFn = handleError();
    returnedFn(errorMsg);
    expect(console.error).toHaveBeenCalledWith(errorMsg);
  });
});
