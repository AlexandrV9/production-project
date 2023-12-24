import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { getArticleDetailsData } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppNavigate } from 'shared/lib/hooks/useAppNavigate';
import { HStack } from 'shared/ui/Stack';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import { getCanEditArticle } from '../../model/selectors/article';

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
      <HStack
        className={classNames("", {}, [className])}
        justify='between'
        max
      >
        <Button theme={ButtonTheme.OUTLINE} onClick={handleBackToList}>
          {t('Back to list')}
        </Button>
        {canEdit && (
          <Button
            theme={ButtonTheme.OUTLINE}
            onClick={handleGoToEditArticle}
          >
            {t('Edit')}
          </Button>
        )}
      </HStack>
    );
  },
);
