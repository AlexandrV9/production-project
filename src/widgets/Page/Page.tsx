import { FC, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';

import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle';
import { useAppLocation } from 'shared/lib/hooks/useLocation';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { getSaveScrollByPath, scrollSaveActions } from 'features/ScrollSave';
import { useInitialLayoutEffect } from 'shared/lib/hooks/useInitialLayoutEffect';

import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  isSaveScroll?: boolean;
  onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = (props) => {
  const { className, children, onScrollEnd, isSaveScroll = true } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const dispatch = useAppDispatch();
  const { pathname } = useAppLocation();

  const scrollPosition = useSelector((state: StateSchema) =>
    getSaveScrollByPath(state, pathname),
  );

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    if (isSaveScroll) {
      dispatch(
        scrollSaveActions.setScrollPosition({
          position: e.currentTarget.scrollTop,
          path: pathname,
        }),
      );
    }
  }, 100);

  useInitialLayoutEffect(() => {
    if (isSaveScroll) {
      wrapperRef.current.scrollTop = scrollPosition;
    }
  });

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section
      className={classNames(cls.Page, {}, [className])}
      ref={wrapperRef}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
