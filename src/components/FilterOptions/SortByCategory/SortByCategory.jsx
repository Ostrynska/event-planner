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
  const { setData } = useEventData();
  const [showOptions, setShowOptions] = useState(false);
  // eslint-disable-next-line
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const priorityMap = {
    High: 3,
    Medium: 2,
    Low: 1,
  };

  const sortFunction = (a, b) => {
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return dateA - dateB;
  };

  const handleCategoryClick = async (sortField, order) => {
    setSortField(sortField);
    setSortOrder(order);
    setShowOptions(false);

    try {
      const response = await axios.get(
        `http://localhost:8800/events?_sort=${sortField}&_order=${order}`
      );
      let sortedData = [...response.data];

      if (sortField === 'priority') {
        sortedData = sortedData.sort((a, b) =>
          order === 'asc'
            ? priorityMap[a.priority] - priorityMap[b.priority]
            : priorityMap[b.priority] - priorityMap[a.priority]
        );
      } else if (sortField === 'date') {
        sortedData = sortedData.sort(sortFunction);
        if (order === 'desc') {
          sortedData.reverse();
        }
      } else if (sortField === 'title') {
        sortedData = sortedData.sort((a, b) =>
          order === 'asc'
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title)
        );
      }

      setData(sortedData);
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
          <SortItem
            key={`${item.type}-${item.order}`}
            onClick={() =>
              handleCategoryClick(item.type, item.order, item.date)
            }
          >
            {item.text}
            {sortOrder === item.order ? <IconUp /> : <IconDown />}
          </SortItem>
        ))}
      </SortList>
    </SortWrapp>
  );
};

export default SortByCategory;
