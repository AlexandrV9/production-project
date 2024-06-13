import { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { ArticleList } from '@/entities/Article';

import {
  getArticlePageIsLoading,
  getArticlePageView,
} from '../../model/selectors/articlePageSelectors';
import { getArticles } from '../../model/slices/articlePageSlice';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = memo(
  (props) => {
    const { className } = props;

    const view = useSelector(getArticlePageView);
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);

    return (
      <ArticleList
        isLoading={isLoading}
        articles={articles}
        view={view}
        className={className}
      />
    );
  },
);
