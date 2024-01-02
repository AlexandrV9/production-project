import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { HStack } from 'shared/ui/Stack';

import { ArticleView } from '../../model/types/article';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemProps> = memo(
  (props) => {
    const { className, view } = props;

    // const types = <Text text={article.type.join(', ')} className={cls.types} />;

    if (view === ArticleView.LIST) {
      return (
        <div
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card className={cls.card}>
            <div className={cls.header}>
              <Skeleton width={30} height={30} border="50%" />
              <Skeleton width={150} height={16} className={cls.username} />
              <Skeleton width={150} height={16} className={cls.date} />
            </div>
            <Skeleton className={cls.title} width={250} height={24} />
            <Skeleton className={cls.img} height={200} />
            <div className={cls.footer}>
              <Skeleton height={36} width={200} />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.imageWrapper}>
            <Skeleton width={200} height={200} className={cls.img} />
          </div>
          <div className={cls.infoWrapper}>
            <Skeleton width={130} height={16} />
          </div>
          <Skeleton width={150} height={16} className={cls.title} />
        </Card>
      </div>
    );
  },
);
