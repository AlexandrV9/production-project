import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  ProfileCard,
  ValidateProfileError,
  profileActions,
} from 'entities/Profile';

import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm';
import { updateProfileData } from '../model/services/updateProfileData/updateProfileData';

import cls from './EditableProfileCard.module.scss';
import { getProfileValidateErrors } from '../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';

interface EditableProfileCardProps {}

export const EditableProfileCard: FC<EditableProfileCardProps> = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = authData?.id === profileData?.id;

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('server_error_when_saving'),
    [ValidateProfileError.INCORRECT_AGE]: t('incorrect_age'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('invalid_region'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t(
      'first_and_last_name_are_required',
    ),
    [ValidateProfileError.NO_DATA]: t('data_not_provided'),
  };

  const handleEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handleCancelEdite = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  const handleChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || '' }));
    },
    [dispatch],
  );

  const handleChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }));
    },
    [dispatch],
  );

  const handleChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }));
    },
    [dispatch],
  );

  const handleChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    },
    [dispatch],
  );

  const handleChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }));
    },
    [dispatch],
  );

  const handleChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch],
  );

  const handleChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch],
  );

  const handleChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch],
  );

  return (
    <div className={cls.EditableProfileCard}>
      <div className={cls.header}>
        <Text title={t('profile')} />
        {canEdit && (
          <div className={cls.btnsWrapper}>
            {readonly ? (
              <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.editBtn}
                onClick={handleEdit}
              >
                {t('edit')}
              </Button>
            ) : (
              <>
                <Button
                  theme={ButtonTheme.OUTLINE_RED}
                  className={cls.cancelEditeBtn}
                  onClick={handleCancelEdite}
                >
                  {t('cancel')}
                </Button>
                <Button
                  theme={ButtonTheme.OUTLINE}
                  className={cls.saveBtn}
                  onClick={handleSave}
                >
                  {t('save')}
                </Button>
              </>
            )}
          </div>
        )}
      </div>
      {validateErrors?.length &&
        validateErrors.map((err) => (
          <Text
            theme={TextTheme.ERROR}
            text={validateErrorTranslates[err]}
            key={err}
          />
        ))}
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirstname={handleChangeFirstname}
        onChangeLastname={handleChangeLastname}
        onChangeCity={handleChangeCity}
        onChangeAge={handleChangeAge}
        onChangeUsername={handleChangeUsername}
        onChangeAvatar={handleChangeAvatar}
        onChangeCurrency={handleChangeCurrency}
        onChangeCountry={handleChangeCountry}
      />
    </div>
  );
};
