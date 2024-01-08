import { testArticle } from '../consts/testArticle';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

import { articleDetailsReducer } from './articleDetailsSlice';

describe('articleDetailsSlice.test', () => {
  test('test load article details pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
      error: undefined,
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        // @ts-ignore
        fetchArticleById.pending,
      ),
    ).toEqual({ isLoading: true, error: undefined });
  });

  test('test load article details fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
      error: '123',
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.fulfilled(testArticle, '', ''),
      ),
    ).toEqual({
      isLoading: false,
      error: undefined,
      data: testArticle,
    });
  });
  test('test load article details rejected', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
      error: '',
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.rejected(null, '', '', 'error'),
      ),
    ).toEqual({
      isLoading: false,
      error: 'error',
    });
  });
});
