import { testArticle } from '../consts/testArticle';
import { articleDetailsReducer } from './articleDetailsSlice';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

describe('articleDetailsSlice.test', () => {
  test('test load article details pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
      error: undefined,
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
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
