import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/ui/Input';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { t } = useTranslation();

  const { className } = props;

  const dispatch = useDispatch();

  const { username, password, error, isLoading } = useSelector(getLoginState);

  const handleChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const handleChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const handleSubmit = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t("You entered an incorrect username or password")}/>
      {error && <Text theme={TextTheme.ERROR} text={t("You entered an incorrect username or password")} />}
      <Input
        value={username}
        onChange={handleChangeUsername}
        className={cls.input}
        placeholder={t('Enter username')}
        autofocus
      />
      <Input
        value={password}
        className={cls.input}
        placeholder={t('Enter password')}
        onChange={handleChangePassword}
      />
      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {t('SignIn')}
      </Button>
    </div>
  );
});
