import { ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { typedMemo } from 'shared/lib/hooks/typedMemo';

import { Card, CardTheme } from '../Card/Card';

import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: string;
  onTabClick: (tab: TabItem<T>) => void;
}

export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
  const { className, tabs, value, onTabClick } = props;
  const { t } = useTranslation();

  const handlClick = useCallback(
    (tab: TabItem<T>) => () => {
      console.log('tab ===>', tab);
      onTabClick?.(tab);
    },
    [onTabClick],
  );

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          className={cls.tab}
          key={tab.value}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          onClick={handlClick(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
