import { Formik } from 'formik';
import { Form, Field } from 'formik';

import { Input, SearchBtn, SearchIcon } from './SearchInput.styled';

function SearchInput() {
  return (
    <>
      <Formik>
        <Form
        //   onSubmit={handleSubmit}
        >
          <label name="search">
            <Input
              type="text"
              placeholder="Enter your search"
              name="search"
              // onChange={handleInputChange}
              // value={state.search}
              autoComplete="on"
              autoFocus
            ></Input>
          </label>
        </Form>
      </Formik>
      <SearchBtn type="submit">
        <SearchIcon size={24} />
      </SearchBtn>
    </>
  );
}

export default SearchInput;
