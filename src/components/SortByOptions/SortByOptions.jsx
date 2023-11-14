import { useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

// import * as API from '../../services/api';
// import { useEventData } from '../../hooks/useEventData';
import sortOptions from '../../data/sortOptions';

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
} from './SortByOptions.styled';

const SortByOptions = () => {
  // const { setData } = useEventData();
  const { t } = useTranslation();
  const [showOptions, setShowOptions] = useState(false);
  // eslint-disable-next-line
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const priorityMap = {
    High: 3,
    Medium: 2,
    Low: 1,
  };

  const sortByDate = (a, b) => {
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return dateA - dateB;
  };

  const handleSortClick = async (sortField, order) => {
    setSortField(sortField);
    setSortOrder(order);
    setShowOptions(false);

    // try {
    //   const results = await API.getSortEvents(sortField, order);

    //   let sortedData = [...results];

    //   if (sortField === 'priority') {
    //     sortedData = sortedData.sort((a, b) =>
    //       order === 'asc'
    //         ? priorityMap[a.priority] - priorityMap[b.priority]
    //         : priorityMap[b.priority] - priorityMap[a.priority]
    //     );
    //   } else if (sortField === 'date') {
    //     sortedData = sortedData.sort(sortByDate);
    //     if (order === 'desc') {
    //       sortedData.reverse();
    //     }
    //   } else if (sortField === 'title') {
    //     sortedData = sortedData.sort((a, b) =>
    //       order === 'asc'
    //         ? a.title.localeCompare(b.title)
    //         : b.title.localeCompare(a.title)
    //     );
    //   }

    //   // setData(sortedData);
    // } catch (err) {
    //   toast.error(t('error'));
    // }
  };

  return (
    <SortWrapp>
      <SortBtn
        onClick={() => setShowOptions(!showOptions)}
        $showsortoptions={showOptions}
      >
        <SortTitle>{t('sort-by')}</SortTitle>
        <SortIcon size={24} />
        <SortOptions $showsortoptions={showOptions}>
          <OptionSelectedMob>{t('sort-by')}</OptionSelectedMob>
        </SortOptions>
      </SortBtn>
      <SortList $showsortoptions={showOptions}>
        {sortOptions.map(item => (
          <SortItem
            key={`${item.type}-${item.order}`}
            onClick={() => handleSortClick(item.type, item.order, item.date)}
          >
            {item.text}
            {sortOrder === item.order ? <IconUp /> : <IconDown />}
          </SortItem>
        ))}
      </SortList>
    </SortWrapp>
  );
};

export default SortByOptions;
