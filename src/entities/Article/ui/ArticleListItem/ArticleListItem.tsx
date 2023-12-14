import { FC, HTMLAttributeAnchorTarget, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Icon } from 'shared/ui/Icon/Icon';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'shared/ui/Loader/Loader';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';

import IconEye from 'shared/assets/icons/eye-20-20.svg';
import Error from 'shared/assets/icons/error-20-20.svg';

import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
  const { className, article, view, target } = props;

  const { t } = useTranslation('article-list');

  const [isErrorImg, setIsErrorImg] = useState(false);
  const [isLoadedImg, setIsLoadedImg] = useState(false);

  const types = <Text text={article.type.join(', ')} className={cls.types} />;

  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={IconEye} />
    </>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar src={article.user.avatar} size={30} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <img src={article.img} alt={article.title} className={cls.img} />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink
              to={`${RoutePath.article_details}/${article.id}`}
              target={target}
            >
              <Button theme={ButtonTheme.OUTLINE}>{t('Read more')}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  const handleLoadImg = () => {
    setIsLoadedImg(true);
  };

  const handleErrorLoadImg = () => {
    setIsErrorImg(true);
    setIsLoadedImg(false);
  };

  const showAddInfo = () => {
    if (isErrorImg) {
      return (
        <div className={cls.loadImageWrapper}>
          <Icon Svg={Error} w={40} h={40} className={cls.errorIcon} />
          <Text text={t('Loading error image')} align={TextAlign.CENTER} />
        </div>
      );
    }

    if (!isLoadedImg) {
      return (
        <div className={cls.loadImageWrapper}>
          <Loader />
        </div>
      );
    }

    return null;
  };

  return (
    <AppLink
      target={target}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      to={`${RoutePath.article_details}/${article.id}`}
    >
      <Card>
        <div className={cls.imageWrapper}>
          {showAddInfo()}
          <img
            src={article.img}
            className={classNames(cls.img, { [cls.notLoaded]: !isLoadedImg })}
            alt={article.title}
            onLoad={handleLoadImg}
            onError={handleErrorLoadImg}
          />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
