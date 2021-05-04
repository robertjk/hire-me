import React, { useState } from 'react';

import { useGetChildren } from '../api';
import { Pagination } from '../Pagination';


function ChildrenDashboard() {
  const childrenAll = useGetChildren();
  const [childrenCurrentPage, setChildrenCurrentPage] = useState([]);

  return (
    <>
      <h1>Children</h1>
      <ol>
        {childrenCurrentPage.map((child) => (
          <li key={child.childId}>
            {child.name.fullName}
          </li>
        ))}
      </ol>
      <Pagination
        itemsAll={childrenAll}
        setItemsCurrentPage={setChildrenCurrentPage}
      />
    </>
  );
}


export { ChildrenDashboard };
