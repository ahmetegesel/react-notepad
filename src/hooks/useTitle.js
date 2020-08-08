import { useContext, useEffect } from 'react';

import MetaContext from '../contexts/metaContext';
import useMountedState from './useMountedState';

export function useTitle() {
  const { actions } = useContext(MetaContext);
  const { title, setTitle } = actions.title;

  return [title, setTitle];
}

export function useTitleEffect(title) {
  const [, setTitle] = useTitle();
  const isMounted = useMountedState();

  useEffect(() => {
    isMounted() && title && setTitle(title);

    // clean up dynamic title and leave it as "Page Name | App Name"
    return () => {
      setTitle(null);
    };
  }, [isMounted, setTitle, title]);
}
