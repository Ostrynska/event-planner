import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';

import { useEventData } from '../../../hooks/useEventData';

import {
  Input,
  SearchIcon,
  ScrubSearchBtn,
  ScrubIcon,
  FormWrapp,
} from './SearchInput.styled';
import axios from 'axios';

function SearchInput() {
  const { setData } = useEventData();
  const [value, setValue] = useState('');
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    const loadEventData = async () => {
      try {
        const response = await axios.get('http://localhost:8800/events');
        setData(response.data);
        setOriginalData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadEventData();
  }, [setData, setOriginalData]);

  const handleReset = () => {
    setValue('');
    setData(originalData);
  };

  const handleSearch = e => {
    const searchValue = e.target.value.toLowerCase();
    setValue(searchValue);

    if (searchValue === '') {
      setData(originalData);
    } else {
      const filteredData = originalData.filter(
        event =>
          event.title.toLowerCase().includes(searchValue) ||
          event.supportingText.toLowerCase().includes(searchValue)
      );
      setData(filteredData);
    }
  };

  return (
    <Formik>
      <FormWrapp onSubmit={e => e.preventDefault()}>
        <label name="search">
          <Input
            type="text"
            placeholder="Enter your search"
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
