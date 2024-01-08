import { Comment } from 'entities/Comment';

import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../../types/ArticleDetailsCommentsSchema';

import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

const comments: Comment[] = [
  {
    id: '1',
    text: 'some comment 1',
    user: {
      id: '1',
      username: 'test',
    },
  },
];

describe('articleDetailsCommentsSlice.test', () => {
  test('test get aricle comments service pending', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: false,
    };
    expect(
      articleDetailsCommentsReducer(
        // @ts-ignore
        state as ArticleDetailsCommentsSchema,
        // @ts-ignore
        fetchCommentsByArticleId.pending,
      ),
    ).toEqual({ isLoading: true, error: undefined });
  });

  test('test get aricle comments service fulfilled', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: true,
    };
    expect(
      articleDetailsCommentsReducer(
        // @ts-ignore
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.fulfilled(comments, '', ''),
      ),
    ).toEqual({
      isLoading: false,
      ids: ['1'],
      entities: {
        '1': {
          id: '1',
          text: 'some comment 1',
          user: {
            id: '1',
            username: 'test',
          },
        },
      },
    });
  });
});
