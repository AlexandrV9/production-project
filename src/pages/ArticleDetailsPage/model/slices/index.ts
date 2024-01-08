import { combineReducers } from '@reduxjs/toolkit';

import { ArticleDetailsPageSchema } from '../types';

import { articleDetailsRecommendationsReducer } from './articleDetailRecommendationsSlice/articleDetailsRecommendationsSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice/articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  // @ts-ignore
  comments: articleDetailsCommentsReducer,
  // @ts-ignore
  recommendations: articleDetailsRecommendationsReducer,
});
