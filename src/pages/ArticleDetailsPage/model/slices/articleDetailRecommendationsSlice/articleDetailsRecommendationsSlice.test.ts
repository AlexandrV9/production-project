import { Article } from 'entities/Article';
import { testArticle } from 'entities/Article/model/consts/testArticle';

import { fetchArticleRecommendations } from '../../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { ArticleDetailsRecommendationsSchema } from '../../types/ArticleDetailsRecommendationsSchema';

import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendationsSlice';


const recommendations: Article[] = [
  testArticle
];

describe('articleDetailsCommentsSlice.test', () => {
  test('test get aricle comments service pending', () => {
    const state: DeepPartial<ArticleDetailsRecommendationsSchema> = {
      isLoading: false,
    };
    expect(
      articleDetailsRecommendationsReducer(
        state as ArticleDetailsRecommendationsSchema,
        fetchArticleRecommendations.pending,
      ),
    ).toEqual({ isLoading: true, error: undefined });
  });

  test('test get aricle comments service fulfilled', () => {
    const state: DeepPartial<ArticleDetailsRecommendationsSchema> = {
      isLoading: true,
    };
    expect(
      articleDetailsRecommendationsReducer(
        state as ArticleDetailsRecommendationsSchema,
        fetchArticleRecommendations.fulfilled(recommendations, ''),
      ),
    ).toEqual({
      isLoading: false,
      ids: ['1'],
      entities: {
        '1': {
          ...testArticle
        },
      },
    });
  });
});
