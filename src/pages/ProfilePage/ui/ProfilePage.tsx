/* eslint-disable i18next/no-literal-string */
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
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

const ProfilePage: FC<ProfilePageProps> = memo((props) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProfileCard />
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
