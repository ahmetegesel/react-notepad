/*eslint-disable*/
import { useCallback, useRef, useState } from 'react';

import useMounted from './useMounted';

function useAsync(fn, deps = [], initialState = {}) {
  const isMounted = useMounted();
  const lastCall = useRef(0);

  const [value, setValue] = useState(initialState);
  const [error, setError] = useState(null);

  const callback = useCallback((...args) => {
    const call = ++lastCall.current;

    return fn(...args).then(value => {
      isMounted() && call === lastCall.current && setValue(value);

      return value
    }).catch(error => {
      isMounted() && call === lastCall.current && setError(error);

      return error;
    })
  }, deps);

  return [value, callback, error];
}

export default useAsync;
