import React from 'react';

import { Child } from './Child';

import './ChildrenList.css';


function ChildrenList({ children }) {
  return (
    <ol className="ChildrenList">
      {children.map((child) => (
        <Child
          key={child.childId}
          child={child}
          className="ChildrenList-child"
        />
      ))}
    </ol>
  );
}


export { ChildrenList };
