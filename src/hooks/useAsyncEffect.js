import useAsync from './useAsync';
import { useEffect } from 'react';

function useAsyncEffect(fn, deps, initialState = null) {
  const [value, callback, error] = useAsync(fn, deps, initialState);

  useEffect(() => {
    callback();
  }, [callback])

  return [value, error];
}

export default useAsyncEffect;
