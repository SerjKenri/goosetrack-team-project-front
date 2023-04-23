import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
// to do translaion.json
const FRONTEND_BASE_URL = 'http://localhost:3000';

const resources = {
    en: {
        translation: {
            button: 'disabled',
            btnSubmit: 'Submit',
            labelTitleName: 'Name',
            labelTitleEmail: 'Email',
            labelTitlePassword: 'Password',
            inputPlaceholderEmail: 'Enter your email',
            inputPlaceholderName: 'Enter your name',
            inputPlaceholderPassword: 'Enter your password',
        },
    },
    ua: {
        translation: {
            button: 'Вимкнена',
            btnSubmit: 'Зареєструватися',
            labelTitleName: "Ім'я",
            labelTitlePassword: 'Пароль',
            labelTitleEmail: 'Імейл',
            inputPlaceholderEmail: 'Введіть свою електронну адресу',
            inputPlaceholderName: "Введіть своє ім'я ",
            inputPlaceholderPassword: 'Введіть свій пароль',
        },
    },
};

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
        backend: {
            loadPath: `${FRONTEND_BASE_URL}/goosetrack-team-project-front/locales/{{lng}}/translation.json`,
        },
        resources,
        fallbackLng: 'en',
        whitelist: ['en', 'uk'],
        debug: true,

        detection: {
            order: ['localStorage', 'cookie'],
        },

        interpolation: {
            escapeValue: false,
        },
    });
