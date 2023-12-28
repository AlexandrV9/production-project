/* eslint-disable i18next/no-literal-string */
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Page } from 'widgets/Page/Page';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}
const ArticleEditPage: FC<ArticleEditPageProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation('article-edit-page');
  const { id } = useParams<{ id: string }>();

  const isEdit = Boolean(id); // true - редактирование false - создание

  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      <Text title={isEdit ? `${t('Edit article with id') } = ${id}` : t("Create new article")} />
    </Page>
  );
});

export default ArticleEditPage;
