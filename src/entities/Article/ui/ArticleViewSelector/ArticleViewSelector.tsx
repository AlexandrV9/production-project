import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import GridIcon from '@/shared/assets/icons/grid-20-20.svg';
import ListIcon from '@/shared/assets/icons/list-20-20.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';

import { ArticleView } from '../../model/consts/constsArticle';

import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view?: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    Icon: GridIcon,
  },
  {
    view: ArticleView.LIST,
    Icon: ListIcon,
  },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo(
  (props) => {
    const { className, onViewClick, view = ArticleView.GRID } = props;
    const { t } = useTranslation();

    const onClick = (newValue: any) => () => {
      onViewClick?.(newValue);
    };

    return (
      <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
        {viewTypes.map((viewType) => (
          <Button
            theme={ButtonTheme.CLEAR}
            onClick={onClick(viewType.view)}
            key={viewType.view}
          >
            <Icon
              Svg={viewType.Icon}
              className={classNames('', {
                [cls.notSelected]: viewType.view !== view,
              })}
            />
          </Button>
        ))}
      </div>
    );
  },
);
