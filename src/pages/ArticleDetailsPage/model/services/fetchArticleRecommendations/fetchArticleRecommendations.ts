import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>('articleDetailsPage/fetchArticleRecommendations', async (props, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const res = await extra.api.get<Article[]>('/articles', {
      params: {
        _limit: 4,
        _expand: 'user',
      },
    });
    const { data } = res;

    if (!data) {
      throw new Error();
    }

    return data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
