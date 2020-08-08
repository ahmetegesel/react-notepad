import React, { useEffect } from 'react';

import withAuth from '../utils/withAuth';
import DefaultLayout from '../layouts/DefaultLayout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useUser from '../hooks/useUser';

function Dashboard() {
  const user = useUser();
  const { setTitle } = useDocumentTitle();

  useEffect(() => {
    if (user && user.username) {
      setTitle(user.username);
    }
  }, [setTitle, user])

  return (
    <DefaultLayout>
      <div>
        This is Dashboard
      </div>
    </DefaultLayout>
  );
}

export default withAuth(Dashboard);
