import { StateSchema } from 'app/providers/StoreProvider';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from './articleDetails';
import { testArticle } from '../consts/article';

describe('articleDetailsSelectors', () => {
  test('should return article details data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: testArticle,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(testArticle);
  });
  test('should return isLoading true', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should return isLoading false', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: false,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty state isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {},
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
});

// export const getArticleDetailsIsLoading = (state: StateSchema) =>
//   state.articleDetails?.isLoading;
// export const getArticleDetailsError = (state: StateSchema) =>
//   state.articleDetails?.error;
