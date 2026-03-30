import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../Locales/en.json';
import ar from '../Locales/ar.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ar: { translation: ar },
        },
        // الإعدادات دي هي اللي بتضمن الحفظ
        detection: {
            order: ['localStorage', 'cookie', 'htmlTag', 'navigator'],
            caches: ['localStorage'], // 👈 هنا بنقوله يحفظ في الـ localStorage
        },
        fallbackLng: 'en',
        interpolation: { escapeValue: false },
    });

export default i18n;