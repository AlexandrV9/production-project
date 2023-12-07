import { StateSchema } from 'app/providers/StoreProvider';

import { testArticle } from 'entities/Article/model/consts/testArticle';
import { ArticleView } from '../../../../entities/Article/model/types/article';
import { getArticlePageError, getArticlePageIsLoading, getArticlePageView } from './articlePageSelectors';
import { getArticles } from '../slices/articlePageSlice';

describe('articlePageSelectors', () => {
  test('should return article page isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        isLoading: false,
      },
    };
    expect(getArticlePageIsLoading(state as StateSchema)).toBe(false);
  });
  test('should return article page error', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        error: 'error',
      },
    };
    expect(getArticlePageError(state as StateSchema)).toBe('error');
  });

  test('should return article page view', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        view: ArticleView.GRID
      },
    };
    expect(getArticlePageView(state as StateSchema)).toBe(ArticleView.GRID);
  });

  test('should return article page list', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        ids: ["1"],
        entities: {
          "1": {
            ...testArticle
          }
        }
      },
    };
    expect(getArticles.selectAll(state as StateSchema)).toEqual([testArticle]);
  });

  test('should work with empty state isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {},
    };
    expect(getArticlePageIsLoading(state as StateSchema)).toBe(false);
  });
});
