import React, { useState } from 'react';

import { useGetChildren } from '../api';
import { Pagination } from '../Pagination';

import { ChildrenList } from './ChildrenList';

import './ChildrenDashboard.css';


function ChildrenDashboard() {
  const childrenAll = useGetChildren();
  const [childrenCurrentPage, setChildrenCurrentPage] = useState([]);

  return (
    <div className="ChildrenDashboard">
      <header>
        <h1 className="ChildrenDashboard-title">
          Children
        </h1>
      </header>
      <main className="ChildrenDashboard-main">
        <ChildrenList children={childrenCurrentPage} />
      </main>
      <footer>
        <nav>
          <Pagination
            itemsAll={childrenAll}
            setItemsCurrentPage={setChildrenCurrentPage}
          />
        </nav>
      </footer>
    </div>
  );
}


export { ChildrenDashboard };
