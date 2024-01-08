import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>('articleDetails/fetchCommentsByArticleId', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    if (!articleId) {
      return rejectWithValue('error');
    }
    const res = await extra.api.get<Comment[]>('/comments', {
      params: {
        articleId,
        _expand: 'user',
      },
    });
    const { data } = res;

    if (!data) {
      throw new Error();
    }

    return data;
  } catch (error) {
    console.log(error);
    return rejectWithValue('error');
  }
});
