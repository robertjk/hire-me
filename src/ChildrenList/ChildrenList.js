import React from 'react';

import './ChildrenList.css';


function ChildrenList({ children }) {
  return (
    <ol className="ChildrenList">
      {children.map((child) => (
        <li
          key={child.childId}
          className="ChildrenList-child"
        >
          {child.name.fullName}
        </li>
      ))}
    </ol>
  );
}


export { ChildrenList };
