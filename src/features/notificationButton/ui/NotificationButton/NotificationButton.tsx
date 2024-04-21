import { FC, memo } from 'react';

import { NotificationList } from 'entities/Notification';

import IconNotification from 'shared/assets/icons/notification-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = memo((props) => {
  const { className } = props;

  return (
    <Popover
      direction='bottomLeft'
      className={cls.NotificationButton}
      trigger={
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={IconNotification} inverted />
        </Button>
      }
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
});
