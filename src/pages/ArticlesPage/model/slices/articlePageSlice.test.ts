import { testArticle } from 'entities/Article/model/consts/testArticle';
import { ArticleView } from '../../../../entities/Article/model/types/article';
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
      page: 1
    };
    expect(
      articlePageReducer(
        state as ArticlePageSchema,
        articlePageActions.setPage(2),
      ),
    ).toEqual({ page: 2 });
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
      hasMore: true,
    };
    expect(
      articlePageReducer(
        state as ArticlePageSchema,
        fetchArticlesList.fulfilled([testArticle], '', {
          page: 1,
        }),
      ),
    ).toEqual({
      isLoading: false,
      hasMore: true,
      ids: ['1'],
      entities: {
        '1': {
          ...testArticle,
        },
      },
    });
  });
});
