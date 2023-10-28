/* eslint-disable i18next/no-literal-string */
import { profileReducer } from 'entities/Profile';
import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = memo((props) => {
  const { className } = props;

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>ProfilePage</div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
