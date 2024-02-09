import React from 'react';
import { queryStringToObject } from '../utils/lib';
import { useLocation } from 'react-router-dom';
function useQueryParams(options: any, url: any) {
  // get query params

  const queryParams = React.useMemo(
    () => queryStringToObject(`?${url.split('?')[1]}`, options),
    [`?${url.split('?')[1]}`]
  );

  // updates the query params

  return { queryParams };
}

export default useQueryParams;
