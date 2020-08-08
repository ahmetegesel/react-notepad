import React, { useEffect } from 'react';

import useDocumentTitle from '../hooks/useDocumentTitle';

const withTitle = title => Component => props => {
  const { setTitle } = useDocumentTitle();

  useEffect(() => {
    setTitle(title);
  }, [setTitle]);

  return (
    <Component {...props} />
  );
}

export default withTitle;
