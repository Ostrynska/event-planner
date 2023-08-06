import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useEventData } from '../../hooks/useEventData';
import { toast } from 'react-toastify';

import * as API from '../../services/api';

import { PaginationWrapp, PaginationList } from './Pagination.styled';

function Pagination() {
  const { data, setData } = useEventData();
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit] = useState(6);
  const [dataLength, setDataLength] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    loadEventData(currentPage * pageLimit, (currentPage + 1) * pageLimit);
  }, []);

  const loadEventData = async (start, end) => {
    try {
      const results = await API.getEventsPage(start, end);
      console.log(results);
      setData(results);
      setDataLength(results.length);

      const totalRecords = parseInt(results.headers['x-total-count']);
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
    <>
      {totalPages === 1 ? (
        <></>
      ) : (
        <PaginationWrapp>
          <PaginationList>
            {currentPage > 0 && <li onClick={handlePrevPage}>Prev</li>}
            <li>{currentPage + 1}</li>
            {currentPage < totalPages - 1 && (
              <li onClick={handleNextPage}>Next</li>
            )}
          </PaginationList>
        </PaginationWrapp>
      )}
    </>
  );
}

export default Pagination;
