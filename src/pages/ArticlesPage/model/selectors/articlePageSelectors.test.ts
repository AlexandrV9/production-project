import { StateSchema } from '@/app/providers/StoreProvider';
import {
  ArticleSortField,
  ArticleType,
  ArticleView,
} from '@/entities/Article/model/consts/constsArticle';
import { testArticle } from '@/entities/Article/model/consts/testArticle';

import { getArticles } from '../slices/articlePageSlice';

import {
  getArticlePageError,
  getArticlePageHasMore,
  getArticlePageInited,
  getArticlePageIsLoading,
  getArticlePageLimit,
  getArticlePageNum,
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
  getArticlePageView,
} from './articlePageSelectors';

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

  test('should return article page _inited', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        _inited: true,
      },
    };
    expect(getArticlePageInited(state as StateSchema)).toBe(true);
  });

  test('should work with empty state isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {},
    };
    expect(getArticlePageIsLoading(state as StateSchema)).toBe(false);
  });

  test('should return article page order', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        order: 'asc',
      },
    };
    expect(getArticlePageOrder(state as StateSchema)).toBe('asc');
  });

  test('should return article page sort', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        sort: ArticleSortField.CREATED,
      },
    };
    expect(getArticlePageSort(state as StateSchema)).toBe(
      ArticleSortField.CREATED,
    );
  });

  test('should return article page search', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        search: '123',
      },
    };
    expect(getArticlePageSearch(state as StateSchema)).toBe('123');
  });

  test('should return article page type', () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        type: ArticleType.IT,
      },
    };
    expect(getArticlePageType(state as StateSchema)).toBe(ArticleType.IT);
  });
});
