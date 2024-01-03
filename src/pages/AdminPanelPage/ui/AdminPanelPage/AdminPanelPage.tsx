import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from 'widgets/Page';

import { classNames } from 'shared/lib/classNames/classNames';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage: FC<AdminPanelPageProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Page className={classNames("", {}, [className])}>
      AdminPanelPage
    </Page>
  );
});

export default AdminPanelPage;
