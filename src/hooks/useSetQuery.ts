import { useLocation, useNavigate } from 'react-router-dom';
import { createQueryString } from '../utils/lib';
function useSetQueryParams() {
  // get query params
  const history = useNavigate();

  const pathname = useLocation();
  const setQueryParams = (queryParams: any, object: any) => {
    history(
      `${pathname.pathname}${createQueryString({
        ...queryParams,
        ...object,
      })}`
    );
  };

  // updates the query params

  return setQueryParams;
}

export default useSetQueryParams;
