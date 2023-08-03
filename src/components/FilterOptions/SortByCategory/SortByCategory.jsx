import { useState } from 'react';
import axios from 'axios';
import { useEventData } from '../../../hooks/useEventData';
import {
  SortWrapp,
  SortBtn,
  SortList,
  SortItem,
  SortIcon,
  IconUp,
  IconDown,
} from './SortByCategory.styled';

export const sortOptions = [
  { text: 'Priority (asc)', type: 'priority', order: 'asc' },
  { text: 'Priority (desc)', type: 'priority', order: 'desc' },
  { text: 'Date (asc)', type: 'date', order: 'asc' },
  { text: 'Date (desc)', type: 'date', order: 'desc' },
  { text: 'Title (asc)', type: 'title', order: 'asc' },
  { text: 'Title (desc)', type: 'title', order: 'desc' },
];

const SortByCategory = () => {
  const { data, setData } = useEventData();
  const [showOptions, setShowOptions] = useState(false);
  const [sortField, setSortField] = useState(''); // Критерій сортування (пріорітет, дата, заголовок)
  const [sortOrder, setSortOrder] = useState('asc'); // Напрям сортування (asc - зростання, desc - спадання)

  const priorityMap = {
    High: 3,
    Medium: 2,
    Low: 1,
  };

  const handleCategoryClick = async (field, order) => {
    setSortField(field);
    setSortOrder(order);
    setShowOptions(false);

    try {
      const response = await axios.get(
        `http://localhost:8800/events?_sort=${field}&_order=${order}`
      );
      if (field === 'priority') {
        response.data.sort((a, b) =>
          order === 'asc'
            ? priorityMap[a.priority] - priorityMap[b.priority]
            : priorityMap[b.priority] - priorityMap[a.priority]
        );
      }
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleCategoryList = () => {
    setShowOptions(prevState => !prevState);
  };

  return (
    <>
      <SortWrapp>
        <SortBtn onClick={toggleCategoryList} showsortoptions={true}>
          Sort by
          <SortIcon size={24} />
        </SortBtn>
        <SortList showsortoptions={showOptions}>
          {sortOptions.map((item, index) => (
            <>
              <SortItem
                key={`${item.type}-${item.order}`}
                onClick={() => handleCategoryClick(item.type, item.order)}
              >
                {item.text}
                {sortField === item.type && sortOrder === item.order ? (
                  <IconDown />
                ) : (
                  <IconUp />
                )}
              </SortItem>
            </>
          ))}
        </SortList>
      </SortWrapp>
    </>
  );
};

export default SortByCategory;
