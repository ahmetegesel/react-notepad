import React  from 'react';

import withAuth from '../utils/withAuth';
import useUser from '../hooks/useUser';

import DefaultLayout from '../layouts/DefaultLayout';
import { compose } from 'ramda';
import withPageTitle from '../utils/withPageTitle';
import { useTitleEffect } from '../hooks/useTitle';

function Dashboard() {
  const user = useUser();

  useTitleEffect(user.username);

  return (
    <DefaultLayout>
      <div>
        This is Dashboard
      </div>
    </DefaultLayout>
  );
}

export default compose(
  withPageTitle(Dashboard.name),
  withAuth,
)(Dashboard);
