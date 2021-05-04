import React, { useState } from 'react';

import { useGetChildren } from '../api';
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
        <ol>
          {childrenCurrentPage.map((child) => (
            <li key={child.childId}>
              {child.name.fullName}
            </li>
          ))}
        </ol>
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
