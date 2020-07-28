import React from 'react';

import withAuth from '../utils/withAuth';

function Dashboard() {
  return (
    <div>
      This is Dashboard
    </div>
  );
}

export default withAuth(Dashboard);
