/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */

import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Calculator />;
  }
}
export default App;
