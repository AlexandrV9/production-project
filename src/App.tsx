import { FC, Suspense, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import "./styles/index.scss";

import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

interface AppProps {};


const App: FC<AppProps> = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
