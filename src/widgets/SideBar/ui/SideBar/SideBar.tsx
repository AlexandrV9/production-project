import { FC, useState } from 'react'

import cls from './SideBar.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface SideBarProps {
  className?: string;
}

const SideBar: FC<SideBarProps> = (props) => {
  
  const {
    className
  } = props;

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  return (
    <div 
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button onClick={onToggle}>toggle</Button>%
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  );
}

export default SideBar;