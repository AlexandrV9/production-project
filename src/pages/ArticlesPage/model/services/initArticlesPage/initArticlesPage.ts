import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';

import { getArticlePageInited } from '../../selectors/articlePageSelectors';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articlePage/fetchNextArticlesPage', async (searchParams, thunkApi) => {
  const { getState, dispatch } = thunkApi;

  const inited = getArticlePageInited(getState());

  if (!inited) {
    
    searchParams.forEach((value, key) => {
      switch (key) {
      case 'order':
        dispatch(articlePageActions.setOrder(value as SortOrder));
        break;
      case "sort":
        dispatch(articlePageActions.setSort(value as ArticleSortField));
        break;
      case "type":
        dispatch(articlePageActions.setType(value as ArticleType));
        break;
      case "search":
        dispatch(articlePageActions.setSearch(value));
        break;
      default:
        break;
      }
    });

    dispatch(articlePageActions.initState());
    dispatch(fetchArticlesList({}));
  }
});
