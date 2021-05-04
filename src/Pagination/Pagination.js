import React, { useEffect, useMemo, useState } from 'react';

import "./Pagination.css";


const ITEMS_PER_PAGE_OPTIONS = [10, 25, 50, 100];
const ITEMS_PER_PAGE_DEFAULT = 25;


function Pagination({
  itemsAll,
  itemsPerPage = ITEMS_PER_PAGE_DEFAULT,
  setItemsCurrentPage,
}) {
  const totalPages = Math.ceil(itemsAll.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = useMemo(function createPagesList() {
    const pagesList = [];
    for (let pageIdx = 1; pageIdx <= totalPages; pageIdx += 1) {
      pagesList.push(pageIdx);
    }
    return pagesList;
  }, [totalPages]);

  useEffect(function createItemsCurrentPage() {
    const currentPageStart = (currentPage - 1) * itemsPerPage;
    const currentPageEnd = currentPageStart + itemsPerPage;
    const itemsCurrentPage = itemsAll.slice(currentPageStart, currentPageEnd);
    setItemsCurrentPage(itemsCurrentPage);
  }, [currentPage, itemsAll, itemsPerPage, setItemsCurrentPage]);

  function pageButtonClassName(page) {
    if (page === currentPage) {
      return 'Pagination-pageButton Pagination-pageButton--currentPage';
    } else {
      return 'Pagination-pageButton';
    }
  }

  return (
    <ol className="Pagination">
      {pages.map((page) => (
        <li
          key={page}
          className="Pagination-page"
        >
          <button
            onClick={() => setCurrentPage(page)}
            className={pageButtonClassName(page)}
          >
            {page}
          </button>
        </li>
      ))}
    </ol>
  );
}


export {
  Pagination,
  ITEMS_PER_PAGE_OPTIONS,
}
