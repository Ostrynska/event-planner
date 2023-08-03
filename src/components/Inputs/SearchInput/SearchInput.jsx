import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { Form, Field } from 'formik';

import {
  Input,
  SearchBtn,
  SearchIcon,
  ScrubSearchBtn,
  ScrubIcon,
  FormWrapp,
} from './SearchInput.styled';

function SearchInput() {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {}, [searchValue]);

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log(searchValue);
    setSearchValue('');
  };

  return (
    <Formik>
      <FormWrapp
      //   onSubmit={handleSubmit}
      >
        <label name="search">
          <Input
            type="text"
            placeholder="Enter your search"
            name="search"
            onChange={handleChange}
            // value={state.search}

            hasicon={searchValue.length > 0 ? 'true' : 'false'}
            autoComplete="on"
            autoFocus
          />
          {searchValue.length > 0 && (
            <ScrubSearchBtn type="submit" onClick={() => setSearchValue('')}>
              <ScrubIcon size={16} />
            </ScrubSearchBtn>
          )}
        </label>
        <SearchBtn type="submit" onClick={handleSubmit}>
          <SearchIcon size={24} />
        </SearchBtn>
      </FormWrapp>
    </Formik>
  );
}

export default SearchInput;
