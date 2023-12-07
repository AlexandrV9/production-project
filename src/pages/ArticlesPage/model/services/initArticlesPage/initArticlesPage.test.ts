import { Dispatch } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlePageActions } from '../../slices/articlePageSlice';

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('initArticlesPage.test', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('success', async () => {
    // @ts-ignore
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlePage: {
        page: 1,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true
      }
    });
    
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 })
  });
});
