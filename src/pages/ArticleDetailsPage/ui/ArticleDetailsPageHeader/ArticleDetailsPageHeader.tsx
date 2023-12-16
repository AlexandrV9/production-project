import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppNavigate } from 'shared/lib/hooks/useAppNavigate';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article';
import { getArticleDetailsData } from 'entities/Article';

import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo(
  (props) => {
    const { className } = props;
    const { t } = useTranslation('article-details');

    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const navigate = useAppNavigate();

    const handleBackToList = useCallback(() => {
      navigate(RoutePath.articles);
    }, [navigate]);

    const handleGoToEditArticle = useCallback(() => {
      navigate(`${RoutePath.articles}/${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
      <div
        className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}
      >
        <Button theme={ButtonTheme.OUTLINE} onClick={handleBackToList}>
          {t('Back to list')}
        </Button>
        {canEdit && (
          <Button
            theme={ButtonTheme.OUTLINE}
            className={cls.editBtn}
            onClick={handleGoToEditArticle}
          >
            {t('Edit')}
          </Button>
        )}
      </div>
    );
  },
);
