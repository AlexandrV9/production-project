import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from 'widgets/Page';

import { classNames } from 'shared/lib/classNames/classNames';

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage: FC<ForbiddenPageProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation('translation');

  return (
    <Page className={classNames("", {}, [className])}>{t("You do not have access to this page")}</Page>
  );
});

export default ForbiddenPage;
