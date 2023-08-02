// import React, { createContext, useContext } from 'react';
// import { useTranslation } from 'react-i18next';

// // Створюємо контекст для перекладу
// const I18nContext = createContext();

// // Створюємо власний хук для використання контексту
// export const useI18n = () => useContext(I18nContext);

// // Компонент-провайдер для забезпечення глобального контексту
// export const I18nProvider = ({ children }) => {
//   const { t, i18n } = useTranslation();

//   return (
//     <I18nContext.Provider value={{ t, i18n }}>{children}</I18nContext.Provider>
//   );
// };
