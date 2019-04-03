import React from 'react';

import '~/config/DevtoolsConfig';
import '~/config/ReactotronConfig';

import routes from '~/routes';

const App = () => {
  const Routes = routes();

  return <Routes />;
};

export default App;
