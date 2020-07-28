import React from 'react';

import requireAuth from '../utils/requireAuth';

function Dashboard() {
  return (
    <div>
      This is Dashboard
    </div>
  );
}

export default requireAuth(Dashboard);
