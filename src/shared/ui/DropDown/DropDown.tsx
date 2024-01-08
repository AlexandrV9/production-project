import { Fragment, ReactNode, useMemo } from 'react';
import { Menu } from '@headlessui/react';

import { classNames } from 'shared/lib/classNames/classNames';
import { DropDownDireaction } from 'shared/types/ui';

import { AppLink } from '../AppLink/AppLink';

import cls from './DropDown.module.scss';

export interface DropDownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropDownProps {
  className?: string;
  items: DropDownItem[];
  trigger: ReactNode;
  direction?: DropDownDireaction;
}

export function DropDown(props: DropDownProps) {
  const { className, items, trigger, direction = 'bottomRight' } = props;
  return (
    <Menu as='div' className={classNames(cls.DropDown, {}, [className])}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, [cls[direction]])}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type='button'
              disabled={item.disabled}
              className={classNames(cls.item, { [cls.active]: active })}
              onClick={item.onClick}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} disabled={item.disabled} key={String(item.content)}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} disabled={item.disabled} key={String(item.content)}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
