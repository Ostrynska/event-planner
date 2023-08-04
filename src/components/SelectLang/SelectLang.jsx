import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import {
  LanguageWrapp,
  LanguageIcon,
  LanguageList,
  LanguageItem,
  Select,
  LanguageIconUp,
} from './SelectLang.styled';

function SelectLang() {
  const [language, setLanguage] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    setSelectedLanguage(lng);
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <LanguageWrapp
        onClick={() => setLanguage(prevState => (prevState === 0 ? 1 : 0))}
      >
        {selectedLanguage.toUpperCase()}
        {language === 0 ? (
          <LanguageIcon size={24} />
        ) : (
          <LanguageIconUp size={24} />
        )}
        {/* <LanguageIcon /> */}
        <LanguageList $showlanguage={language} onClick={() => setLanguage(0)}>
          <LanguageItem>
            <Select onClick={() => changeLanguage('en')}>EN</Select>
          </LanguageItem>
          <LanguageItem>
            <Select onClick={() => changeLanguage('ua')}>UA</Select>
          </LanguageItem>
        </LanguageList>
      </LanguageWrapp>
    </>
  );
}

export default SelectLang;
