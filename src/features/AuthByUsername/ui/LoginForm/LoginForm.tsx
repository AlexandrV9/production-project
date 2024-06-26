import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/ui/Input';
import { Text, TextTheme } from '@/shared/ui/Text/Text';

import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess?: () => void;  // вызывается тогда, когда пользователь успешно авторизован
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm = memo((props: LoginFormProps) => {
  const { t } = useTranslation();

  const { className, onSuccess } = props;

  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const isLoading = useSelector(getLoginIsLoading);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);

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

  const handleSubmit = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if(result.meta.requestStatus === "fulfilled") {
      onSuccess?.();
    } 
  }, [dispatch, password, username, onSuccess]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Authorization form')} />
        {error && (
          <Text
            theme={TextTheme.ERROR}
            text={t('You entered an incorrect username or password')}
          />
        )}
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
