import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useEventData } from '../../hooks/useEventData';

import { PaginationWrapp } from './Pagination.styled';

function Pagination() {
  const { data, setData } = useEventData();
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit] = useState(8);
  const [dataLength, setDataLength] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    loadEventData(currentPage * pageLimit, (currentPage + 1) * pageLimit);
  }, [currentPage]);

  const loadEventData = async (start, end) => {
    try {
      const response = await axios.get(
        `http://localhost:8800/events?_start=${start}&_end=${end}`
      );
      setData(response.data);
      setDataLength(response.data.length);

      const totalRecords = parseInt(response.headers['x-total-count']);
      const pages = Math.ceil(totalRecords / pageLimit);
      setTotalPages(pages);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <PaginationWrapp>
      <ul>
        {currentPage > 0 && <li onClick={handlePrevPage}>Prev</li>}
        <li>{currentPage + 1}</li>
        {currentPage < totalPages - 1 && <li onClick={handleNextPage}>Next</li>}
      </ul>
    </PaginationWrapp>
  );
}

export default Pagination;
