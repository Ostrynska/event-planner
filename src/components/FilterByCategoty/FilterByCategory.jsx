import { useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(t('category'));
  // eslint-disable-next-line
  const [filterValue, setFilterValue] = useState('');

  const handleCategoryClick = async category => {
    // setSelectedCategory(category);
    // setShowCategory(false);
    // try {
    //   const results = await API.getFilterEvents(filterValue, category);
    //   let sortedData = [...results];
    //   setData(sortedData);
    // } catch (err) {
    //   toast.error(t('error'));
    // }
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
          <CategorySelectedMob>{t('category')}</CategorySelectedMob>
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
