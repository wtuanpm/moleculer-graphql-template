import i18n from 'i18n';
import env from '@/env';
import { AppLocale } from '@gobysend/goby-definition/dist/i18n';

i18n.configure({
  locales: [AppLocale.EN, AppLocale.VI],
  objectNotation: true,
  updateFiles: false,
  directory: `${env.root}/locales`,
  defaultLocale: AppLocale.EN,
  register: global,
});

export default i18n;
