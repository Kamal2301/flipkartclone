import React from 'react';

import HomeScreen from './Screens/HomeScreen/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './Utils/Store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
