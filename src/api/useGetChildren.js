import { useEffect, useState } from 'react';

import { fetchChildren } from './childrenActions';


async function fetchAndSetChildren(setChildren) {
  setChildren(await fetchChildren());
}

function useGetChildren() {
  const [children, setChildren] = useState([]);
  useEffect(() => {
    fetchAndSetChildren(setChildren);
  }, [setChildren]);
  return children;
}


export { useGetChildren };
