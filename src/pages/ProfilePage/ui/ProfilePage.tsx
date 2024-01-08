import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { Page } from 'widgets/Page/ui/Page';

import { EditableProfileCard } from 'features/EditableProfileCard';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = memo(() => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page>
      <EditableProfileCard id={id} />
    </Page>
  );
});

export default ProfilePage;
