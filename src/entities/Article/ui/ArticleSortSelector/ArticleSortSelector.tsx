import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { SortOrder } from 'shared/types';
import { Select, SelectOtion } from 'shared/ui/Select/Select';

import { ArticleSortField } from 'entities/Article/model/consts/constsArticle';

import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo(
  (props) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation('articles-page');

    const orderOptions = useMemo<SelectOtion<SortOrder>[]>(
      () => [
        {
          value: 'asc',
          content: t('increase'),
        },
        {
          value: 'desc',
          content: t('decrease'),
        },
      ],
      [t],
    );

    const orderFieldOptions = useMemo<SelectOtion<ArticleSortField>[]>(
      () => [
        {
          value: ArticleSortField.CREATED,
          content: t('creation date'),
        },
        {
          value: ArticleSortField.TITLE,
          content: t('title'),
        },
        {
          value: ArticleSortField.VIWEWS,
          content: t('views'),
        },
      ],
      [t],
    );

    // Так делать очень плохо
    // const changeSortHandler = useCallback((newSort: string) => {
    //   onChangeSort(newSort as ArticleSortField)
    // },[onChangeSort])

    // const changeSortOrder = useCallback((newOrder: string) => {
    //   onChangeOrder(newOrder as SortOrder)
    // },[onChangeOrder])

    return (
      <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
        <Select
          label={t('Sort by')}
          options={orderFieldOptions}
          value={sort}
          className={cls.sort}
          onChange={onChangeSort}
        />
        <Select
          label={t('by')}
          options={orderOptions}
          value={order}
          className={cls.order}
          onChange={onChangeOrder}
        />
      </div>
    );
  },
);
