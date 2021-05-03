import { useEffect, useState } from 'react';
import axios from 'axios';

import {
  API_ACCESS_TOKEN,
  API_GROUP_ID,
  API_INSITUTION_ID,
  API_FETCH_CHILDREN_URL,
} from './config';


function useGetChildren() {
  const [children, setChildren] = useState([]);
  useEffect(() => {
    fetchChildren(setChildren);
  }, [setChildren]);
  return children;
}

async function fetchChildren(setChildren) {
  const requestConfig = {
    params: {
      accessToken: API_ACCESS_TOKEN,
      groupId: API_GROUP_ID,
      institutionId: API_INSITUTION_ID,
    },
  };

  try {
    const response = await axios.get(API_FETCH_CHILDREN_URL, requestConfig);
    setChildren(response.data.children);
  } catch (error) {
    console.error('Error when fetching children:', error);
  }
}

export { useGetChildren };
