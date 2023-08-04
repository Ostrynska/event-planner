import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Select } from './SelectLang.styled';

import {
  LanguageWrapp,
  LanguageIcon,
  LanguageList,
  LanguageItem,
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
        <LanguageIcon size={24} />
      </LanguageWrapp>

      <LanguageList $showlanguage={language} onClick={() => setLanguage(0)}>
        <LanguageItem>
          <Select onClick={() => changeLanguage('en')}>EN</Select>
        </LanguageItem>
        <LanguageItem>
          <Select onClick={() => changeLanguage('ua')}>UA</Select>
        </LanguageItem>
      </LanguageList>
    </>
  );
}

export default SelectLang;

// import { useTranslation } from 'react-i18next';

// import { Select } from './SelectLang.styled';

// function SelectLang() {
//   const { t, i18n } = useTranslation();

//   const changeLanguage = lng => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div>
//       <Select onClick={() => changeLanguage('en')}>EN</Select>
//       <Select onClick={() => changeLanguage('ua')}>UA</Select>
//     </div>
//   );
// }

// export default SelectLang;
