import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Page } from 'widgets/Page/Page';

import { EditableProfileCard } from 'features/EditableProfileCard';

import { Text } from 'shared/ui/Text/Text';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = memo(() => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('profile');
  
  if(!id) {
    return <Text text={t("Profile not found")}/>
  }
  return (
    <Page>
      <EditableProfileCard id={id} />
    </Page>
  );
});

export default ProfilePage;
