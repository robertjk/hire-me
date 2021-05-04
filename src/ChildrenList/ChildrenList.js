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
          <p className="ChildrenList-childName">
          {child.name.fullName}
          </p>
          {child.checkedIn ? (
            <button className="ChildrenList-childAction ChildrenList-childAction--checkout">
              Checkout
            </button>
          ) : (
            <button className="ChildrenList-childAction">
              Checkin
            </button>
          )}
        </li>
      ))}
    </ol>
  );
}


export { ChildrenList };
