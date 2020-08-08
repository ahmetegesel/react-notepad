import { useCallback, useEffect, useRef } from 'react';

function useMountedState() {
  const isMounted = useRef(false);

  const get = useCallback(() => isMounted.current, [isMounted]);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    }
  });

  return get;
}

export default useMountedState;
