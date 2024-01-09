import { FC, memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';

import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from 'entities/Article/model/consts/constsArticle';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
  const { className, id } = props;
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            className={cls.block}
            block={block}
            key={block.id}
          />
        );
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            className={cls.block}
            block={block}
            key={block.id}
          />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            className={cls.block}
            block={block}
            key={block.id}
          />
        );
      default:
        return null;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          width={200}
          height={200}
          border='50%'
          className={cls.avatar}
        />
        <Skeleton width={300} height={32} className={cls.title} />
        <Skeleton width='100%' height={200} className={cls.skeleton} />
        <Skeleton width='100%' height={200} className={cls.skeleton} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        title={t('There was an error loading the article')}
        align={TextAlign.CENTER}
      />
    );
  } else {
    content = (
      <>
        <HStack justify='center' max>
          <Avatar size={200} src={article?.img} className={cls.avatar} />
        </HStack>
        <VStack gap='8' max>
          <Text
            title={article?.title}
            text={article?.subtitle}
            size={TextSize.L}
          />
          <HStack gap='8' className={cls.articleInfo}>
            <Icon Svg={EyeIcon} className={cls.icon} />
            <Text text={article?.views.toString()} />
          </HStack>
          <HStack gap='8'>
            <Icon Svg={CalendarIcon} className={cls.icon} />
            <Text text={article?.createdAt} />
          </HStack>
        </VStack>

        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack
        gap='16'
        max
        className={classNames(cls.ArticleDetails, {}, [className])}
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
