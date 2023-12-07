import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlePageLimit } from '../../selectors/articlePageSelectors';

interface fetchArticlesListProps {
  page: number;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  fetchArticlesListProps,
  ThunkConfig<string>
>('articlePage/fetchArticlesList', async (props, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const { page = 1 } = props;

  const limit = getArticlePageLimit(getState());

  try {
    const res = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page
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
