import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { LoginModal } from 'features/AuthByUsername';

import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from 'entities/User';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { DropDown } from 'shared/ui/DropDown/DropDown';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation('translation');
  const dispatch = useDispatch();
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const handleCloseModal = useCallback(() => {
    setIsAuthModal((prevValue) => !prevValue);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsAuthModal((prevValue) => !prevValue);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('Lib Storage App')}
          theme={TextTheme.INVERTED}
        />

        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createLink}
        >
          {t('Create article')}
        </AppLink>
        <DropDown
          className={cls.dropdown}
          trigger={<Avatar size={30} src={authData.avatar} />}
          items={[
            ...(isAdminPanelAvailable
              ? [
                {
                  content: t('Admin'),
                  href: `${RoutePath.admin_panel}`,
                },
              ]
              : []),
            {
              content: t('Profile'),
              href: `${RoutePath.profile}/${authData.id}`,
            },
            { content: t('Exit'), onClick: handleLogout },
          ]}
          direction='bottomLeft'
        />
        <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        className={cls.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={handleOpenModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />
      )}
    </header>
  );
});
