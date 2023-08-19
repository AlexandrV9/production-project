import { FC, Suspense } from "react";

import "./styles/index.scss";

import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { useTranslation } from "react-i18next";

interface AppProps {};


const App: FC<AppProps> = () => {

  const { theme } = useTheme();

  

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <Suspense fallback="">
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
