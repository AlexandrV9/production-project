import { Dispatch } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { testArticle } from 'entities/Article/model/consts/testArticle';
import { fetchArticlesList } from './fetchArticlesList';

describe('fetchArticlesList.test', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('success', async () => {
    // @ts-ignore
    const thunk = new TestAsyncThunk(fetchArticlesList, {});
    thunk.api.get.mockReturnValue(Promise.resolve({ data: [testArticle] }));
    const result = await thunk.callThunk({});

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual([testArticle]);
  });

  test('rejected', async () => {
    // @ts-ignore
    const thunk = new TestAsyncThunk(fetchArticlesList, {});
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({});

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
