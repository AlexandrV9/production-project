import { FC, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDireaction } from '@/shared/types/ui';

import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropDownDireaction;
  children?: ReactNode;
  unmount?: boolean;
}

export const Popover: FC<PopoverProps> = (props) => {
  const { className, trigger, direction = 'bottomRight', children, unmount } = props;

  return (
    <HPopover
      className={classNames(cls.Popover, {}, [className, popupCls.popup])}
    >
      <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>

      <HPopover.Panel
        unmount={unmount}
        className={classNames(cls.panel, {}, [popupCls[direction]])}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
