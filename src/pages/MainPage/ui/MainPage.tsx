import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from 'widgets/Page/Page';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page>
      <p>{t('Главная страница')}</p>
    </Page>
  );
});

export default MainPage;
