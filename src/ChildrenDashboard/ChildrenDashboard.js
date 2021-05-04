import React, { useState } from 'react';

import { useGetChildren } from '../api';
import { ChildrenList } from '../ChildrenList';
import { Pagination } from '../Pagination';

import './ChildrenDashboard.css';


function ChildrenDashboard() {
  const childrenAll = useGetChildren();
  const [childrenCurrentPage, setChildrenCurrentPage] = useState([]);

  return (
    <div className="ChildrenDashboard">
      <header>
        <h1>Children</h1>
      </header>
      <main>
        <ChildrenList children={childrenCurrentPage} />
      </main>
      <footer>
        <Pagination
          itemsAll={childrenAll}
          setItemsCurrentPage={setChildrenCurrentPage}
        />
      </footer>
    </div>
  );
}


export { ChildrenDashboard };
