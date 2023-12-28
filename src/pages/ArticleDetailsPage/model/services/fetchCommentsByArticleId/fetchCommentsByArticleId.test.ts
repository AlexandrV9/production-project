import { Dispatch } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

const comments = [
  {
    id: '1',
    text: 'some comment 1',
    articleId: '1',
    userId: '1',
  },
  {
    id: '2',
    text: 'some comment 2',
    articleId: '1',
    userId: '1',
  },
];

describe('fetchCommentsByArticleId.test', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('success', async () => {
    // @ts-ignore
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId, {});
    thunk.api.get.mockReturnValue(Promise.resolve({ data: comments }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(comments);
  });

  test('rejected', async () => {
    // @ts-ignore
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId, {});
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
