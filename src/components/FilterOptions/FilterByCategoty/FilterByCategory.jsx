import { useState } from 'react';

import {
  CategoryWrapp,
  CategoryBtn,
  CategoryIcon,
  CategoryList,
  CategoryItem,
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

  const toggleCategoryList = () => {
    if (showCategory) {
      setPrevRadius('8px');
    }
    setShowCategory(prevState => !prevState);
  };

  return (
    <CategoryWrapp>
      <CategoryBtn onClick={toggleCategoryList} showcategory={true}>
        {selectedCategory}
        <CategoryIcon size={24} />
      </CategoryBtn>
      <CategoryList showcategory={showCategory} value={sortValue}>
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
