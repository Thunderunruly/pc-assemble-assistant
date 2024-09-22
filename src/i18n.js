import { createI18n } from 'vue-i18n';
import zhCNJSON from './locale/zhCN.json';
import enUSJSON from './locale/enUS.json';
import languages from "./i18n/languages.json";
import { 
    zhCN as naiveZhCN, 
    enUS as naiveEnUS,
} from 'naive-ui';

export const messages = {
  zhCN: {
    languages,
    ...naiveZhCN,
    ...zhCNJSON,
  },
  enUS: {
    languages,
    ...naiveEnUS,
    ...enUSJSON,
  },
};

const i18n = createI18n({
  locale: 'enUS',
  messages,
  availableLocales: Object.keys(messages)
});

export default i18n;
