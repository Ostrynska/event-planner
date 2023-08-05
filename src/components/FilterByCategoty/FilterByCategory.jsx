import { useState } from 'react';
import { toast } from 'react-toastify';

import * as API from '../../services/api';
import { useEventData } from '../../hooks/useEventData';
import categoryList from '../../data/categories';

import {
  CategoryWrapp,
  CategoryBtn,
  CategoryOptions,
  CategorySelected,
  CategorySelectedMob,
  CategoryList,
  CategoryItem,
  CategoryIcon,
} from './FilterByCategory.styled';

function FilterByCaregory() {
  const { setData } = useEventData();
  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Category');
  // eslint-disable-next-line
  const [filterValue, setFilterValue] = useState('');

  const handleCategoryClick = async category => {
    setSelectedCategory(category);
    setShowCategory(false);

    try {
      const results = await API.getFilterEvents(filterValue, category);
      let sortedData = [...results];
      setData(sortedData);
    } catch (err) {
      toast.error('Something went wrong. Please try again');
    }
  };

  return (
    <CategoryWrapp>
      <CategoryBtn
        onClick={() => setShowCategory(!showCategory)}
        $showcategory={showCategory}
      >
        <CategorySelected>{selectedCategory}</CategorySelected>
        <CategoryIcon size={24} />
        <CategoryOptions $showcategory={showCategory}>
          <CategorySelectedMob>Category</CategorySelectedMob>
        </CategoryOptions>
      </CategoryBtn>
      <CategoryList $showcategory={showCategory} value={filterValue}>
        {categoryList.map((item, index) => (
          <CategoryItem key={index} onClick={() => handleCategoryClick(item)}>
            {item}
          </CategoryItem>
        ))}
      </CategoryList>
    </CategoryWrapp>
  );
}
export default FilterByCaregory;
