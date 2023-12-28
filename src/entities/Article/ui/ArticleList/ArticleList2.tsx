import {
  ComponentType,
  FC,
  FunctionComponent,
  HTMLAttributeAnchorTarget,
  memo,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import {
  GridScrollSeekPlaceholderProps,
  ItemContent,
  Virtuoso,
  VirtuosoGrid,
  VirtuosoGridHandle,
} from 'react-virtuoso';

import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';

import { ARTICLE_LIST_ITEM_INDEX } from 'shared/const/localstorage';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';

import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import cls from './ArticleList2.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  onLoadNextPart?: () => void;
}

const getSkeletons = () =>
  new Array(3)
    .fill(0)
    .map((_, index) => (
      <ArticleListItemSkeleton
        view={ArticleView.LIST}
        key={index}
        className={cls.card}
      />
    ));

const Header = memo(() => <ArticlesPageFilters className={cls.header} />);

const ItemContainerComp: FC<
  GridScrollSeekPlaceholderProps & { context?: { view: ArticleView } }
> = memo(({ context, index }) => (
  <div className=''>
    <ArticleListItemSkeleton
      key={index}
      view={context?.view || ArticleView.GRID}
      className={cls.card}
    />
  </div>
));

const Footer: FC<{ context?: { isLoading?: boolean } }> = memo(({ context }) => {
  if (context?.isLoading) {
    return <div className={cls.skeleton}>{getSkeletons()}</div>;
  }
  return null;
});

export const ArticleList: FC<ArticleListProps> = memo((props) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.GRID,
    target,
    onLoadNextPart,
  } = props;
  const { t } = useTranslation('article-list');

  const [selectedArticleId, setSelectedArticleId] = useState(1);
  const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

  const renderArticle = (index: number, article: Article) => (
    <ArticleListItem
      view={view}
      article={article}
      className={cls.card}
      key={article.id}
      target={target}
      index={index}
    />
  );

  useEffect(() => {
    // const paged = sessionStorage.getItem(ARTICLE_LIST_ITEM_INDEX) || 1;
    // console.log(paged);
    // setSelectedArticleId(Number(paged));
    // return () => {
    //   sessionStorage.removeItem(ARTICLE_LIST_ITEM_INDEX);
    // };
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (view === ArticleView.GRID) {
      timeoutId = setTimeout(() => {
        if (virtuosoGridRef.current) {
          virtuosoGridRef.current.scrollToIndex(selectedArticleId);
        }
      }, 100);
    }
    return () => clearTimeout(timeoutId);
  }, [selectedArticleId, view]);

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text title={t('No articles found')} size={TextSize.L} />
      </div>
    );
  }

  console.log('return markup');

  return (
    <section
      className={classNames(cls.ArticleList, {}, [className, cls[view]])}
    >
      {view === ArticleView.LIST ? (
        <Virtuoso
          style={{ height: '100%' }}
          data={articles}
          itemContent={renderArticle}
          endReached={onLoadNextPart}
          initialTopMostItemIndex={selectedArticleId}
          components={{
            Header,
            // eslint-disable-next-line react/no-unstable-nested-components
            Footer: () => <Footer context={{ isLoading }}/>
          }}
        />
      ) : (
        <VirtuosoGrid
          ref={virtuosoGridRef}
          totalCount={articles.length}
          components={{ Header, ScrollSeekPlaceholder: ItemContainerComp }}
          endReached={onLoadNextPart}
          data={articles}
          itemContent={renderArticle}
          listClassName={cls.itemsWrapper}
          scrollSeekConfiguration={{
            enter: (velocity) => Math.abs(velocity) > 200,
            exit: (velocity) => Math.abs(velocity) < 30,
          }}
        />
      )}
    </section>
  );
});
