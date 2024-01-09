import {
  articlePageActions,
  articlePageReducer,
} from './model/slices/articlePageSlice';
import type { ArticlePageSchema } from './model/types/articlePageSchema';
import { ArticlesPageAsync } from './ui/ArticlesPage/ArticlesPage.async';

export {
  articlePageActions,
  articlePageReducer,
  ArticlePageSchema,
  ArticlesPageAsync as ArticlesPage,
};
