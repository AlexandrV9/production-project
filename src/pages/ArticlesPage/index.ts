import { ArticlesPageAsync } from './ui/ArticlesPage/ArticlesPage.async';
import {
  articlePageActions,
  articlePageReducer,
} from './model/slices/articlePageSlice';
import { ArticlePageSchema } from './model/types/articlePageSchema';

export {
  ArticlesPageAsync as ArticlesPage,
  articlePageActions,
  articlePageReducer,
  ArticlePageSchema,
};
