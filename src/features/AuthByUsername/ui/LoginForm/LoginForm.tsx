import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/ui/Input';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../../AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginIsLoading } from '../../../AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../../AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../../AuthByUsername/model/selectors/getLoginError/getLoginError';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm = memo((props: LoginFormProps) => {
  const { t } = useTranslation();

  const { className } = props;

  const dispatch = useDispatch();

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

  const handleSubmit = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

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
