import { FC, memo, useCallback, useState } from 'react';

import { NotificationList } from '@/entities/Notification';
import IconNotification from '@/shared/assets/icons/notification-20-20.svg';
import { useDevice } from '@/shared/lib/hooks/useDevice';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Popover } from '@/shared/ui/Popups';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = memo((props) => {
  const { className } = props;

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleOpenDrawer = useCallback(() => {
    setIsOpenDrawer(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setIsOpenDrawer(false);
  }, []);

  const isMobile = useDevice();

  const trigger = (
    <div onClick={handleOpenDrawer}>
      <Icon Svg={IconNotification} inverted />
    </div>
  );

  if (isMobile) {
    return (
      <>
        {trigger}
        <Drawer isOpen={isOpenDrawer} onClose={handleCloseDrawer}>
          <NotificationList />
        </Drawer>
      </>
    );
  }

  return (
    <Popover
      unmount={false}
      direction='bottomLeft'
      className={cls.NotificationButton}
      trigger={trigger}
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
});
