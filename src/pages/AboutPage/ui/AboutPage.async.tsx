import { lazy } from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАЕМ. ЭТО ИСКУСТВЕННАЯ ЗАДЕРЖКА
  setTimeout(() => resolve(import('./AboutPage')), 1200)
}));  