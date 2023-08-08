import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

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

  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    setSelectedLanguage(lng);
    i18n.changeLanguage(lng);
  };
  return (
    <LanguageWrapp
      onClick={e => {
        e.stopPropagation();
        setLanguage(prevState => (prevState === 0 ? 1 : 0));
        toast.warning(
          'Sorry... This function temporary is under construction and working in a demo version which has some bugs.'
        );
      }}
    >
      {selectedLanguage.toUpperCase()}
      {language === 0 ? (
        <LanguageIcon size={24} />
      ) : (
        <LanguageIconUp size={24} />
      )}
      <LanguageList
        $showlanguage={language}
        onClick={e => {
          e.stopPropagation();
          setLanguage(0);
        }}
      >
        <LanguageItem>
          <Select onClick={() => changeLanguage('en')}>EN</Select>
        </LanguageItem>
        <LanguageItem>
          <Select onClick={() => changeLanguage('ua')}>UA</Select>
        </LanguageItem>
      </LanguageList>
    </LanguageWrapp>
  );
}

export default SelectLang;
