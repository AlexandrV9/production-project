import { testArticle } from 'entities/Article/model/consts/testArticle';
import { ArticleSortField, ArticleType, ArticleView } from '../../../../entities/Article/model/types/article';
import { articlePageActions, articlePageReducer } from './articlePageSlice';
import { ArticlePageSchema } from '../types/articlePageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

describe('articlePageSlice.test', () => {
  test('test set view = LIST', () => {
    const state: DeepPartial<ArticlePageSchema> = {
      view: ArticleView.GRID,
    };
    expect(
      articlePageReducer(
        state as ArticlePageSchema,
        articlePageActions.setView(ArticleView.LIST),
      ),
    ).toEqual({ view: ArticleView.LIST });
  });

  test('test set view = GRID', () => {
    const state: DeepPartial<ArticlePageSchema> = {
      view: ArticleView.LIST,
    };
    expect(
      articlePageReducer(
        state as ArticlePageSchema,
        articlePageActions.setView(ArticleView.GRID),
      ),
    ).toEqual({ view: ArticleView.GRID });
  });

  test('test set page = 2', () => {
    const state: DeepPartial<ArticlePageSchema> = {
      page: 1,
    };
    expect(
      articlePageReducer(
        state as ArticlePageSchema,
        articlePageActions.setPage(2),
      ),
    ).toEqual({ page: 2 });
  });

  test('test set view = LIST', () => {
    const state: DeepPartial<ArticlePageSchema> = {
      view: ArticleView.GRID,
    };
    expect(
      articlePageReducer(
        state as ArticlePageSchema,
        articlePageActions.setView(ArticleView.LIST),
      ),
    ).toEqual({ view: ArticleView.LIST });
  });

  test('test set order = desc', () => {
    const state: DeepPartial<ArticlePageSchema> = {
      order: "asc",
    };
    expect(
      articlePageReducer(
        state as ArticlePageSchema,
        articlePageActions.setOrder("desc"),
      ),
    ).toEqual({ order: "desc" });
  });

  test('test set sort = TITLE', () => {
    const state: DeepPartial<ArticlePageSchema> = {
      sort: ArticleSortField.CREATED,
    };
    expect(
      articlePageReducer(
        state as ArticlePageSchema,
        articlePageActions.setSort(ArticleSortField.TITLE),
      ),
    ).toEqual({ sort: ArticleSortField.TITLE });
  });

  test('test set search = dew', () => {
    const state: DeepPartial<ArticlePageSchema> = {
      search: "",
    };
    expect(
      articlePageReducer(
        state as ArticlePageSchema,
        articlePageActions.setSearch("dew"),
      ),
    ).toEqual({ search: "dew" });
  });

  test('test set type = dew', () => {
    const state: DeepPartial<ArticlePageSchema> = {
      type: ArticleType.ALL,
    };
    expect(
      articlePageReducer(
        state as ArticlePageSchema,
        articlePageActions.setType(ArticleType.IT),
      ),
    ).toEqual({ type: ArticleType.IT });
  });


  test('test get article list service pending', () => {
    const state: DeepPartial<ArticlePageSchema> = {
      isLoading: false,
    };
    expect(
      articlePageReducer(state as ArticlePageSchema, fetchArticlesList.pending),
    ).toEqual({ isLoading: true });
  });

  test('test get article list service fulfilled', () => {
    const state: DeepPartial<ArticlePageSchema> = {
      isLoading: true,
      ids: [],
      entities: {},
      hasMore: false,
    };
    expect(
      articlePageReducer(
        state as ArticlePageSchema,
        fetchArticlesList.fulfilled([testArticle], '', {}),
      ),
    ).toEqual({
      isLoading: false,
      hasMore: false,
      ids: ['1'],
      entities: {
        '1': {
          ...testArticle,
        },
      },
    });
  });
});
