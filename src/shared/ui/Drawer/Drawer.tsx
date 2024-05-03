import {
  FC,
  memo,
  MutableRefObject,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react';

import { useTheme } from 'app/providers/ThemeProvider';

import { classNames } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal';

import { Overlay } from '../Overlay/Overlay';
import Portal from '../Portal/Portal';

import cls from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Drawer: FC<DrawerProps> = memo((props) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const { theme } = useTheme();

  const { close, isClosing, isMounted } = useModal({
    animationDelay: 280,
    onClose,
    isOpen,
  });

  const mods = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(cls.Drawer, mods, [
          className,
          theme,
          'app_drawer',
        ])}
      >
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
