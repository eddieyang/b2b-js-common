import zh_cn from './zh_cn';

const findByLangKey = (lang, key) => {
  const val = lang[key];
  if(!val){
    return key;
  }
  return lang;
};

export const lang = {
  zh_cn: (key) => findByLangKey(zh_cn, key)
};