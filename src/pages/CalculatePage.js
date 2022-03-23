import React from 'react';
import Calculator from '../components/Calculator';

const CalculatePage = () => (
  <div className=" container-fluid">
    <div className="row p-4 m-5">
      <h3 className="col-4"> Let &apos;s do some math!</h3>
      <div className="col-8">
        <Calculator />
      </div>
    </div>

  </div>
);
export default CalculatePage;
