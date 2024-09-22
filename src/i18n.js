import { createI18n } from 'vue-i18n';
import { zhCN as naiveZhCN, enUS as naiveEnUS, zhCN } from 'naive-ui';
import zhCNJSON from './locale/zhCN.json';
import enUSJSON from './locale/enUS.json';
import languages from './locale/languages.json';

const messages = {
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
  locale: 'zhCN',
  messages,
  availableLocales: ["zhCN", "enUS"]
});

export default i18n;
