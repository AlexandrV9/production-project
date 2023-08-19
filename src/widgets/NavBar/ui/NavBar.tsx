import { FC } from 'react'

import cls from './NavBar.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';


interface NavBarProps {
  className?: string;
}

const NavBar: FC<NavBarProps> = (props) => {

  const {
    className
  } = props;

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О сайте</AppLink>
      </div>
    </div>
  );
}

export default NavBar;