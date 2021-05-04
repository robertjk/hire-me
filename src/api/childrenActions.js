import axios from 'axios';

import {
  API_ACCESS_TOKEN,
  API_GROUP_ID,
  API_INSITUTION_ID,
  API_CHILD_CHECKIN_URL,
  API_CHILD_CHECKOUT_URL,
  API_FETCH_CHILDREN_URL,
} from './config';


async function checkinChild(childId, pickupTime = '16:00') {
  const requestData = {
    accessToken: API_ACCESS_TOKEN,
    pickupTime,
  };

  try {
    await axios.post(API_CHILD_CHECKIN_URL(childId), requestData);
    return true;
  } catch (error) {
    console.error('Error when checking in a child:', error);
    throw error;
  }
}

async function checkoutChild(childId) {
  const requestData = {
    accessToken: API_ACCESS_TOKEN,
  };

  try {
    await axios.post(API_CHILD_CHECKOUT_URL(childId), requestData);
    return true;
  } catch (error) {
    console.error('Error when checking out a child:', error);
    throw error;
  }
}

async function fetchChildren() {
  const requestConfig = {
    params: {
      accessToken: API_ACCESS_TOKEN,
      groupId: API_GROUP_ID,
      institutionId: API_INSITUTION_ID,
    },
  };

  try {
    const response = await axios.get(API_FETCH_CHILDREN_URL, requestConfig);
    return response.data.children;
  } catch (error) {
    console.error('Error when fetching children:', error);
    throw error;
  }
}


export {
  checkinChild,
  checkoutChild,
  fetchChildren,
};
