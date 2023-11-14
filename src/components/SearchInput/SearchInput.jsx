import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

// import * as API from '../../services/api';
// import { useEventData } from '../../hooks/useEventData';

import {
  Input,
  SearchIcon,
  ScrubSearchBtn,
  ScrubIcon,
  FormWrapp,
} from './SearchInput.styled';

function SearchInput() {
  // const { setData } = useEventData();
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const [originalData, setOriginalData] = useState([]);

  // useEffect(() => {
  //   const loadEventData = async () => {
  //     try {
  //       const results = await API.getEvents();
  //       setData(results);
  //       setOriginalData(results);
  //     } catch (err) {
  //       toast.error(t('error'));
  //     }
  //   };
  //   loadEventData();
  //   // eslint-disable-next-line
  // }, [setData, setOriginalData]);

  const handleReset = () => {
    setValue('');
  };

  const handleSearch = e => {
    const searchValue = e.target.value.toLowerCase();
    setValue(searchValue);

    // if (searchValue === '') {
    //   setData(originalData);
    // } else {
    //   const filteredData = originalData.filter(
    //     e =>
    //       e.title.toLowerCase().includes(searchValue) ||
    //       e.supportingText.toLowerCase().includes(searchValue)
    //   );
    //   if (filteredData.length === 0 && searchValue.length > 2) {
    //     toast.warning(t('search-warning'));
    //     setData(originalData);
    //   } else {
    //     setData(filteredData);
    //   }
    // }
  };

  return (
    <Formik>
      <FormWrapp onSubmit={e => e.preventDefault()}>
        <label name="search">
          <Input
            type="text"
            placeholder={t('search')}
            name="search"
            value={value}
            onChange={handleSearch}
            hasicon={value.length > 0 ? 'true' : 'false'}
            autoComplete="on"
            autoFocus
          />
          {value.length > 0 && (
            <ScrubSearchBtn onClick={() => handleReset()}>
              <ScrubIcon size={16} />
            </ScrubSearchBtn>
          )}
        </label>
        <SearchIcon size={24} />
      </FormWrapp>
    </Formik>
  );
}

export default SearchInput;
