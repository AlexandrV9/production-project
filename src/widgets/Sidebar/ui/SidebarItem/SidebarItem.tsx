import { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { t } from 'i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { getUserAuthData } from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';

import { SidebarItemType } from '../../model/types/sidebar';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed?: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
  const { item, collapsed } = props;

  const isAuth = useSelector(getUserAuthData);

  const mods = {
    [cls.collapsed]: collapsed,
  };

  if (!isAuth && item.authOnly) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item?.path}
      className={classNames(cls.item, mods)}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
