import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { Page } from 'widgets/Page/Page';

// import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList2';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import {
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView,
} from '../../model/selectors/articlePageSelectors';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
  articlePageReducer,
  getArticles,
} from '../../model/slices/articlePageSlice';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {}

const reducers: ReducersList = {
  articlePage: articlePageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = () => {
  const { t } = useTranslation('articles-page');
  const dispatch = useAppDispatch();

  const view = useSelector(getArticlePageView);
  const error = useSelector(getArticlePageError);
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const [searchParams] = useSearchParams();

  const handleLoadNextPart = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchNextArticlesPage());
    }
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      {error ? (
        <Text text={t('Failed to load data')} theme={TextTheme.ERROR} />
      ) : (
        // <ArticleList
        //   isLoading={isLoading}
        //   articles={articles}
        //   view={view}
        //   className={cls.list}
        //   onLoadNextPart={handleLoadNextPart}
        // />
        <div />
      )}
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
