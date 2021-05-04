import React from 'react';

import { useGetChildren } from '../api';


function ChildrenDashboard() {
  const children = useGetChildren();

  return (
    <>
      <h1>Children</h1>
      <ol>
        {children.map((child) => (
          <li key={child.childId}>
            {child.name.fullName}
          </li>
        ))}
      </ol>
    </>
  );
}


export { ChildrenDashboard };
