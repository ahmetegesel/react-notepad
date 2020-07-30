import React from 'react';

import withAuth from '../utils/withAuth';
import DefaultLayout from '../layouts/DefaultLayout';

function Dashboard() {
  return (
    <DefaultLayout>
      <div>
        This is Dashboard
      </div>
    </DefaultLayout>
  );
}

export default withAuth(Dashboard);
