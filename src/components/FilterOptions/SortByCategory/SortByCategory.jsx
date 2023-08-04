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
  SortOptions,
  OptionSelectedMob,
  SortTitle,
} from './SortByCategory.styled';

export const sortOptions = [
  { text: 'Priority', type: 'priority', order: 'asc' },
  { text: 'Priority', type: 'priority', order: 'desc' },
  { text: 'Date', type: 'date', order: 'asc' },
  { text: 'Date', type: 'date', order: 'desc' },
  { text: 'Title', type: 'title', order: 'asc' },
  { text: 'Title', type: 'title', order: 'desc' },
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
      if (field === 'date') {
        const sortedData = data
          .map(item => {
            return { ...item, date: new Date(item.date) };
          })
          .sort((a, b) => b.date - a.date);
      }
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SortWrapp>
      <SortBtn
        onClick={() => setShowOptions(!showOptions)}
        $showsortoptions={showOptions}
      >
        <SortTitle>Sort by</SortTitle>
        <SortIcon size={24} />
        <SortOptions $showsortoptions={showOptions}>
          <OptionSelectedMob>Category</OptionSelectedMob>
        </SortOptions>
      </SortBtn>
      <SortList $showsortoptions={showOptions}>
        {sortOptions.map(item => (
          <>
            <SortItem
              key={`${item.type}-${item.order}`}
              onClick={() =>
                handleCategoryClick(item.type, item.order, item.date)
              }
            >
              {item.text}
              {sortOrder === item.order ? <IconUp /> : <IconDown />}
            </SortItem>
          </>
        ))}
      </SortList>
    </SortWrapp>
  );
};

export default SortByCategory;
