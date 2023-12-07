import { fetchProfileData, profileReducer } from 'entities/Profile';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = memo(() => {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page>
        <EditableProfileCard />
      </Page>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
