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

import { Overlay } from '../Overlay/Overlay';
import Portal from '../Portal/Portal';

import cls from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 280;

export const Drawer: FC<DrawerProps> = memo((props) => {
  const { className, children, isOpen, onClose } = props;

  const [isClosing, setIsClosing] = useState(false);

  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const { theme } = useTheme();

  const handleClose = useCallback(() => {
    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      setIsClosing(false);
      onClose?.();
    }, ANIMATION_DELAY);
  }, [onClose]);

  const mods = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  return (
    <Portal>
      <div
        className={classNames(cls.Drawer, mods, [
          className,
          theme,
          'app_drawer',
        ])}
      >
        <Overlay onClick={handleClose} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
