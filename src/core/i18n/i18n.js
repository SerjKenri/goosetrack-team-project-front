import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
// to do translaion.json
const FRONTEND_BASE_URL = "http://localhost:3000";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
        backend: {
            loadPath: `${FRONTEND_BASE_URL}/goosetrack-team-project-front/locales/{{lng}}/translation.json`,
        },
        fallbackLng: 'en',
        whitelist: ['en', 'uk'],
        debug: false,

        detection: {
            order: ['localStorage', 'cookie'],
        },

        interpolation: {
            escapeValue: false,
        },
    });
