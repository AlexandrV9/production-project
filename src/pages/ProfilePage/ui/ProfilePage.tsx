import {
  fetchProfileData,
  profileReducer,
} from 'entities/Profile';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { FC, memo, useEffect } from 'react';

import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = memo(() => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <EditableProfileCard />
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
