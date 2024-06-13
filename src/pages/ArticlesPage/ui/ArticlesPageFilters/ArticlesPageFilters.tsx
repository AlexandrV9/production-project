import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleType,
  ArticleTypeTabs,
  ArticleView,
  ArticleViewSelector,
} from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebaunce } from '@/shared/lib/hooks/useDebaunce';
import { SortOrder } from '@/shared/types';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/ui/Input';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';

import {
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
  getArticlePageView,
} from '../../model/selectors/articlePageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlePageActions } from '../../model/slices/articlePageSlice';

import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = memo(
  (props) => {
    const { className } = props;
    const { t } = useTranslation('articles-page');
    const dispatch = useAppDispatch();

    const view = useSelector(getArticlePageView);
    const order = useSelector(getArticlePageOrder);
    const sort = useSelector(getArticlePageSort);
    const search = useSelector(getArticlePageSearch);
    const type = useSelector(getArticlePageType);

    const fetchData = useCallback(() => {
      dispatch(
        fetchArticlesList({
          replace: true,
        }),
      );
    }, [dispatch]);

    const debauncedFetchData = useDebaunce(fetchData, 500);

    const handleChangeView = useCallback(
      (view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
      },
      [dispatch],
    );

    const handleChangeOrder = useCallback(
      (order: SortOrder) => {
        dispatch(articlePageActions.setOrder(order));
        dispatch(articlePageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData],
    );

    const handleChangeSort = useCallback(
      (sort: ArticleSortField) => {
        dispatch(articlePageActions.setSort(sort));
        dispatch(articlePageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData],
    );

    const handleChangeSearch = useCallback(
      (search: string) => {
        dispatch(articlePageActions.setSearch(search));
        dispatch(articlePageActions.setPage(1));
        debauncedFetchData();
      },
      [dispatch, debauncedFetchData],
    );

    const handleChangeType = useCallback(
      (value: ArticleType) => {
        dispatch(articlePageActions.setType(value));
        dispatch(articlePageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData],
    );

    return (
      <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
        <div>
          <ArticleSortSelector
            order={order}
            sort={sort}
            onChangeOrder={handleChangeOrder}
            onChangeSort={handleChangeSort}
          />
          <ArticleViewSelector view={view} onViewClick={handleChangeView} />
        </div>
        <Card className={cls.search}>
          <Input
            placeholder={t('Search')}
            value={search}
            onChange={handleChangeSearch}
          />
        </Card>
        <ArticleTypeTabs
          value={type}
          onChangeType={handleChangeType}
          className={cls.tabs}
        />
      </div>
    );
  },
);
