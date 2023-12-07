import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import ListIcon from 'shared/assets/icons/list-20-20.svg';
import GridIcon from 'shared/assets/icons/grid-20-20.svg';

import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ArticleView } from '../../model/types/article';

import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
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
    const { className, onViewClick, view } = props;
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