// import { useState } from 'react';
import { LuFilter } from 'react-icons/lu';
import {} from './FilterByCategory.styled';

export const option = [
  'Art',
  'Music',
  'Business',
  'Conference',
  'Workshop',
  'Party',
  'Sport',
];

const FilterByCaregory = () => {
  return (
    <>
      <LuFilter size={24} />
    </>
  );
};

export default FilterByCaregory;