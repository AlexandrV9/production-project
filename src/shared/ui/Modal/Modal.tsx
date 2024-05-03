import {
  FC,
  MouseEvent,
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal';

import { Overlay } from '../Overlay/Overlay';

import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const Modal: FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const { close, isRenderModal, isClosing, isMounted } = useModal({
    animationDelay: 300,
    onClose,
    isOpen,
  });

  const mods: Mods = {
    [cls.opened]: isRenderModal,
    [cls.closing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <div className={classNames(cls.Modal, mods, [className])}>
      <Overlay onClick={close} />
      <div className={cls.content}>{children}</div>
    </div>
  );
};

export default Modal;
