import { FC } from "react";

import cls from "./LangSwitcher.module.scss";

import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className } = props;

  const { t, i18n } = useTranslation();

  const onToggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button 
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR} 
      onClick={onToggle}
    >
      {t("Язык")}
    </Button>
  );
};

export default LangSwitcher;
