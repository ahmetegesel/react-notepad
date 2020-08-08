import React, { useContext, useEffect } from 'react';

import useMountedState from '../hooks/useMountedState';
import MetaContext from '../contexts/metaContext';

const withPageTitle = title => Component => props => {
  const { actions } = useContext(MetaContext);
  const { setPageName } = actions.title;
  const isMounted = useMountedState();

  useEffect(() => {
    isMounted() && setPageName(title);
  }, [isMounted, setPageName]);

  return (
    <Component {...props} />
  );
}

export default withPageTitle;
