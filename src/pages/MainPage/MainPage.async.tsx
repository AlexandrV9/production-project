import { lazy } from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАЕМ. ЭТО ИСКУСТВЕННАЯ ЗАДЕРЖКА
  setTimeout(() => resolve(import('./MainPage')), 1200)
}));  