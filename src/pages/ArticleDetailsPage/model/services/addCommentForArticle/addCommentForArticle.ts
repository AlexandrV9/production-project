import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { getArticleDetailsData } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';

import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkApi) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkApi;

  const userData = getUserAuthData(getState());
  const article = getArticleDetailsData(getState());

  if (!userData || !text || !article) {
    return rejectWithValue('no data');
  }

  try {
    const res = await extra.api.post<Comment>('/comments', {
      articleId: article.id,
      userId: userData.id,
      text,
    });
    const { data } = res;

    if (!data) {
      throw new Error();
    }

    // 1
    // const newComment: Comment = {
    //   id: res.data.id,
    //   user: userData,
    //   text: res.data.text
    // }

    // 1
    // dispatch(articleDetailsCommentsActions.addComment(newComment));

    // 2
    dispatch(fetchCommentsByArticleId(article.id));

    console.log(data)

    return data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
