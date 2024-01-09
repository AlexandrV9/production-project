import type { ArticleDetailsPageSchema } from './model/types';
import type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
import type { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationsSchema';
import { ArticleDetailsPageAsync } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export {
  ArticleDetailsCommentsSchema,
  ArticleDetailsPageAsync as ArticleDetailsPage,
  ArticleDetailsPageSchema,
  ArticleDetailsRecommendationsSchema};
