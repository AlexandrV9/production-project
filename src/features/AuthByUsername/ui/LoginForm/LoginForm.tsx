import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { t } = useTranslation();

  const { className } = props;

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input className={cls.input} placeholder={t('Enter username')} autofocus/>
      <Input className={cls.input} placeholder={t('Enter password')} />
      <Button className={cls.loginBtn}>{t('SignIn')}</Button>
    </div>
  );
};

export default LoginForm;
