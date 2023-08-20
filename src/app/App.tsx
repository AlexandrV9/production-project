import { FC, Suspense } from "react";

import "./styles/index.scss";

import { classNames } from "shared/lib/classNames/classNames";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

interface AppProps {}

const App: FC<AppProps> = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
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
