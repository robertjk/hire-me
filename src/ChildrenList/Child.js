import React, { useState } from 'react';

import { checkinChild, checkoutChild } from '../api';

import './Child.css';


function Child({ child }) {
  const [checkedIn, setCheckedIn] = useState(child.checkedIn);

  async function handleCheckinChild(child) {
    try {
      await checkinChild(child.childId);
      child.checkedIn = true;
      setCheckedIn(true);
    } catch(error) {
      alert('Checkin unsuccessful');
    }
  }

  async function handleCheckoutChild(child) {
    try {
      await checkoutChild(child.childId);
      child.checkedIn = false;
      setCheckedIn(false);
    } catch(error) {
      alert('Checkout unsuccessful');
    }
  }

  function childClassName() {
    if (checkedIn) {
      return 'Child-child Child--checkedIn';
    } else {
      return 'Child-child';
    }
  }

  return (
    <li className={childClassName()}>
      <p className="Child-childName">
      {child.name.fullName}
      </p>
      {checkedIn ? (
        <button
          className="Child-childAction"
          onClick={() => handleCheckoutChild(child)}
        >
          Checkout
        </button>
      ) : (
        <button
          className="Child-childAction"
          onClick={() => handleCheckinChild(child)}
        >
          Checkin
        </button>
      )}
    </li>
  );
}


export { Child };
