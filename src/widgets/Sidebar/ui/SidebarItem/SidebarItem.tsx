import { FC, memo } from 'react';

import { t } from 'i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { classNames } from 'shared/lib/classNames/classNames';

import { SidebarItemType } from '../../model/item';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed?: boolean;
}

const SidebarItem: FC<SidebarItemProps> = memo((props) => {
  const { item, collapsed } = props;

  const mods = {
    [cls.collapsed]: collapsed,
  };

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

export default SidebarItem;
