import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      pt: {
        translation: {
            header: {
                description: 'SevenApps - Teste Front-End',
            },
            home: {
                title: 'Filtrar usuários',
                name: 'Nome',
                age: 'Idade',
                filter: 'Filtrar'
            },
            notFound: {
                title: 'Não foi possível encontrar essa página',
                description: 'A página que você está procurando foi movida ou morta como um prego.',
            },
        }
      },
      en: {
        translation: {
            header: {
                description: 'SevenApps - Frontend Test',
            },
            home: {
                title: 'Filter users',
                name: 'Name',
                age: 'Age',
                filter: 'Filter'
            },
            notFound: {
                title: 'We couldn\'t find that page',
                description: 'The page you are looking for has either been moved or as dead as a doornail.',
            },
        }
      }
    }
  });

export default i18n;