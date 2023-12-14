import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
  test('test with one param', () => {
    const params = getQueryParams({
      test: 'value',
    });
    expect(params).toBe('?test=value');
  });
  test('test with multiple param', () => {
    const params = getQueryParams({
      test1: 'value1',
      test2: 'value2',
    });
    expect(params).toBe('?test1=value1&test2=value2');
  });
  test('test with underfind', () => {
    const params = getQueryParams({
      test1: 'value1',
      test2: undefined,
    });
    expect(params).toBe('?test1=value1');
  });
  test('test with initial query params', () => {
    jest.spyOn(window, 'location', 'get').mockReturnValue({
      ...window.location,
      search: '?abc=1&second=4',
    });

    const params = getQueryParams({
      test: undefined,
      second: '2',
    });

    expect(params).toBe('?abc=1&second=2');
  });
});
