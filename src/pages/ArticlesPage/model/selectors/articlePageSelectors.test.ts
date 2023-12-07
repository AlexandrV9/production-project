import { StateSchema } from 'app/providers/StoreProvider';

import { testArticle } from 'entities/Article/model/consts/testArticle';
import { ArticleView } from '../../../../entities/Article/model/types/article';
import {
  getArticlePageError,
  getArticlePageHasMore,
  getArticlePageIsLoading,
  getArticlePageLimit,
  getArticlePageNum,
  getArticlePageView,
} from './articlePageSelectors';
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
        view: ArticleView.GRID,
      },
    };
    expect(getArticlePageView(state as StateSchema)).toBe(ArticleView.GRID);
  });

  test('should return article page list', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        ids: ['1'],
        entities: {
          '1': {
            ...testArticle,
          },
        },
      },
    };
    expect(getArticles.selectAll(state as StateSchema)).toEqual([testArticle]);
  });

  test('should return article page num', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        page: 1,
      },
    };
    expect(getArticlePageNum(state as StateSchema)).toBe(1);
  });

  test('should return article page hasMore', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        hasMore: true,
      },
    };
    expect(getArticlePageHasMore(state as StateSchema)).toBe(true);
  });

  test('should return article page limit', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        limit: 10,
      },
    };
    expect(getArticlePageLimit(state as StateSchema)).toBe(10);
  });

  test('should work with empty state isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {},
    };
    expect(getArticlePageIsLoading(state as StateSchema)).toBe(false);
  });
});
