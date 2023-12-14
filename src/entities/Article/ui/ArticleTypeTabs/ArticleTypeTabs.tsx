import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';

import { ArticleType } from '../../model/types/article';

interface ArticleTypeTabsProps {
  className?: string;
  value: string;
  onChangeType: (value: ArticleType) => void;
}

// Лучше в дальнейшем расположить этот компонент в раздел фичей
// со своим собственным стейтом. Сейчас же нужно значение выбран.
// типа и функцию изменения этого значениия передавать извне, чтобы
// не нарушать архитектуру FSD

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = memo((props) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem<ArticleType>[]>(
    () =>
      Object.values(ArticleType).reduce(
        (acc: TabItem<ArticleType>[], cur) => [
          ...acc,
          { value: cur, content: t(cur, { ns: 'article-list' }) },
        ],
        [],
      ),
    [t],
  );

  const handleClickTab = useCallback(
    (tab: TabItem<ArticleType>) => {
      onChangeType(tab.value);
    },
    [onChangeType],
  );

  return (
    <Tabs
      className={classNames('', {}, [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={handleClickTab}
    />
  );
});
