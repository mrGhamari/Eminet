import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';
import faIR from 'src/i18n/fa-IR';
import enUS from 'src/i18n/en-US';

export type MessageLanguages = keyof typeof messages;
// Type-define 'fa-IR' as the master schema for the resource
export type MessageSchema = (typeof messages)['fa-IR'];

// See https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
/* eslint-disable @typescript-eslint/no-empty-interface */
declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}

  // define the datetime format schema
  export interface DefineDateTimeFormat {}

  // define the number format schema
  export interface DefineNumberFormat {}
}
/* eslint-enable @typescript-eslint/no-empty-interface */

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: 'fa-IR',
    legacy: false,
    fallbackLocale: 'en-US',
    messages: { faIR, enUS },
  });
  app.use(i18n);
});
