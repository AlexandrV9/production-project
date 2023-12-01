import { Dispatch } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { addCommentForArticle } from './addCommentForArticle';

const data = {
  articleId: '1',
  id: '1',
  text: 'comment 1',
  userId: '1',
};

describe('addCommentForArticle.test', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('success', async () => {
    // @ts-ignore
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData: {
          id: '1',
          username: 'tester01',
        },
      },
      articleDetails: {
        data: {
          id: '1',
        },
      },
    });
    thunk.api.post.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk('comment 1');

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('rejected', async () => {
    // @ts-ignore
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData: {
          id: '1',
          username: 'tester01',
        },
      },
      articleDetails: {
        data: {
          id: '1',
        },
      },
    });
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk("cooment 1");

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
