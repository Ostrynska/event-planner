import { useState } from 'react';

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
import axios from 'axios';
import { useEventData } from '../../../hooks/useEventData';

const categoryList = [
  'Art',
  'Music',
  'Business',
  'Conference',
  'Workshop',
  'Party',
  'Sport',
];

const priorityMap = {
  high: 1,
  medium: 2,
  low: 3,
};

function FilterByCaregory() {
  const { data, setData } = useEventData();
  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [sortValue, setSortValue] = useState('');
  const [prevRadius, setPrevRadius] = useState('8px');

  const handleCategoryClick = async category => {
    setSelectedCategory(category);
    setShowCategory(false);

    try {
      const response = await axios.get(
        `http://localhost:8800/events?_sort=${sortValue}&category=${category}`
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
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
      <CategoryList $showcategory={showCategory} value={sortValue}>
        {categoryList.map(item => (
          <CategoryItem key={item.id} onClick={() => handleCategoryClick(item)}>
            {item}
          </CategoryItem>
        ))}
      </CategoryList>
    </CategoryWrapp>
  );
}
export default FilterByCaregory;
