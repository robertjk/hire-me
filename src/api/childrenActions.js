import axios from 'axios';

import {
  API_ACCESS_TOKEN,
  API_GROUP_ID,
  API_INSITUTION_ID,
  API_FETCH_CHILDREN_URL,
} from './config';


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


export { fetchChildren };
